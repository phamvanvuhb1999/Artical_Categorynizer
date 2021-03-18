import socket 
import threading
import random
import regex as re


def listenToClient(connection, client):
    data = connection.recv(1000)
    print("received '%s'" % data)
    string = str(check_newspaper(str(data)))
    connection.sendall(bytes(string, 'ascii'))
    connection.close()


def check_newspaper(url):
    url = re.sub("['*']"," ", url)
    #clone website here
    print("data is:" + str(url))
    #transfor to input data to server_python for test


    #return result
    return url


sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
host = 'localhost' 
port = 3004
sock.bind((host, port)) 
sock.listen(10) 
while True: 
	connection, client = sock.accept()
	threading.Thread(target=listenToClient, args=(connection, client)).start()