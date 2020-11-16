var net = require('net')
var udp = require('dgram')

function createMagicPacket(mac){
  const MAC_REPEAT    = 16
  const MAC_LENGTH    = 0x06
  const PACKET_HEADER = 0x06

  const parts  = mac.match(/[0-9a-fA-F]{2}/g)
  
  if(!parts || parts.length != MAC_LENGTH)
    throw new Error(`Malformed MAC address "${mac}"`)

  var buffer = Buffer.alloc(PACKET_HEADER)
  buffer.fill(0xff)

  var bufMac = Buffer.from(parts.map(p => parseInt(p, 16)))

  for(var i = 0; i < MAC_REPEAT; i++){
    buffer = Buffer.concat([ buffer, bufMac ])
  }

  return buffer
}

function wake(address, mac){
  const port = 9

  var magicPacket = createMagicPacket(mac)

  var socket = 
    udp
    .createSocket(net.isIPv6(address) ? 'udp6' : 'udp4')
    .on('error', function(){socket.close()})
    .once('listening', function(){socket.setBroadcast(true)})

  return new Promise((resolve, reject) => {
    socket.send(
      magicPacket, 0, magicPacket.length, port, address, 
      function(err, res){
        let result = res == magicPacket.length
        if(err) reject(err)
        else resolve(result)
        socket.close();
      }
    )
  })
}

module.exports = wake;