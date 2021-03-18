import socket
import sys 


# Create a TCP/IP socket 
stream_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
host = 'localhost' 
port = 3004
server_address = ((host, port)) 
stream_socket.connect(server_address)
# Send data 
#default input
message = b'https://vnexpress.net/solskjaer-cac-giai-cup-doi-khi-chi-the-hien-cai-toi-cua-hlv-4250217.html'
if len(sys.argv) > 1:
	temp = bytearray()
	temp1 = sys.argv[1]
	temp1.encode("utf-8")
	temp.extend(map(ord, temp1))
	message = temp
  
stream_socket.sendall(message) 
# response 
data = stream_socket.recv(60) 
print(data.decode(encoding="UTF-8")) 
stream_socket.close()