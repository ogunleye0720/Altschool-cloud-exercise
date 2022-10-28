<h1> IP ADDRESS AND NETWORKING EXERCISE </h2>

<p> Given the following IP address/CIDR: 193.16.20.35/29 </p>
<p>
  <ul>
    <li>
      What is the Network IP ?
    </li>
    <li>Number of hosts</li>
    <li>Range of IP addresses</li>
    <li> Broadcast IP from this subset </li>
</ul>
</p>

<h3> Using CIDR: </h3>

<p>The bit-lengt prefix of the of the IP address: 193.16.20.35/29 is (/29) <br>
The bit-length prefix can be converted to an equivalent quad-dotted,by separating the bit-length prefix in increments of 8.<br>
  Hence, the bit-length prefix can be written as 29 = 8 + 8 + 8 + 5
</p>

| Quad - Dotted  | 0 | 128 | 192 | 224 | 240 | 248 | 252 | 254 | 255 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |------------- |------------- |
|  Bit - length (n) | 0  | 1  | 2  | 3 | 4 | 5 | 6 | 7 | 8 |


``` bash
29 = 8 + 8 + 8 + 5
Comparing each bit digits to the table above
29 can be converted to 255.255.255.248
Therefore, The ip address 193.16.20.35/29 
and the subnet mask is 255.255.255.248
```

<p> The total number of bits T<sub>b</sub> = 8 can be used determine the number of bits used for subnetting. <br>
  Referencing The table above,the possible values for subnet masks can be 0,128, 192, 224, 240, 248, 252, 254, and 255.
  n represents the total number of bits used for subnetting. in this case, n = 5 bits </p>
  
  <p> The total number of bits (m) left for host can be gotten from the expression : T<sub>b<sub> = m + n </p>
  
  ``` bash
   m = Tb - n 
   m = 8 - 5 
   m = 3 
  ```
  
  <h3> The number of hosts per subnet can be gotten from the expression: 2<sup>m</sup> - 2 </h3>
  
  ``` bash
   2^m - 2
   2^3 - 2 
   8 - 2 = 6
   
   The Host = 6
  ```
  <p> To get the Network IP </p>
  <p>Each Octets of the IP address and subnets can be converted to their equivalent binary digits (0s and 1s) and perform AND logical operation on them </p> 
  
  <h3> EQUIVALENT BINARY DIGIT OF THE SUBNET 255.255.255.248 </h3>
  <p> Given the subnet 255.255.255.248 we can convert it to equivalent binary <br>
    
    First octet:
    255 ------> 11111111 
    <br>
    Second Octet:
    255 ------> 11111111
     <br>
    Third Octet:
    255 ------> 11111111
     <br>
    Fourth Octet:
    248 ------> 11111000
  </p>
  
   <h3> EQUIVALENT BINARY DIGIT OF THE IP ADDRESS 193.16.20.35 </h3>
  <p> Given the IP address 193.16.20.35/29 we can convert it to equivalent binary <br>
    
    First octet:
    193 ------> 11000001
    <br>
    Second Octet:
    16 ------> 00010000
     <br>
    Third Octet:
    20 ------> 00010100
     <br>
    Fourth Octet:
    35 ------> 00100011
  </p>
  
  <h3> Performing Logical AND operation on the ip address and subnet to get the equivalent Network IP </h3>
  
| IP address in Decimal Notation  | 193 | 16 | 20 | 35 |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| IP address in Binary Equivalent  | 11000001 | 00010000 | 00010100 | 00100011 | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|  Subnet mask in Binary Equivalent  | 11111111  | 11111111 | 11111111  | 11111000 |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|  Resulting AND operation Binary Equivalent  | 11000001  | 00010000 | 00010100  | 00100000 |
  
  <p> The Binary equivalent of the result is = 11000001.00010000.00010100.00100000 </p>
  <p> The binary equivalent result can be converted into its decimal equivalent to get the network ip : </p>
  <p> The decimal equivalent of 11000001.00010000.00010100.00100000 = 193.16.20.32 <br>
    Therefore the Network Ip is 193.16.20.32
  </p>
  
  <h3> BROADCAST IP </h3>
 <p> By performing a logical OR operation on the Binary equivalent of the IP address and the inverse of the subnet mask, the Broadcast IP address can be generated. </p>
  
  | IP address in Decimal Notation  | 193 | 16 | 20 | 35 |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| IP address in Binary Equivalent  | 11000001 | 00010000 | 00010100 | 00100011 | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|  Inverse of Subnet mask in Binary Equivalent  | 00000000  | 00000000 | 00000000  | 00000111 |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|  Resulting OR operation Binary Equivalent  | 11000001  | 00010000 | 00010100  | 11111111 |
  
  
  <p> The Binary equivalent of the result is = 11000001.00010000.00010100.11111111 </p>
  <p> The binary equivalent result can be converted into its decimal equivalent to get the Broadband ip : </p>
  <p> The decimal equivalent of 11000001.00010000.00010100.00100000 = 193.16.20.39 <br>
    Therefore the Network Ip is 193.16.20.39
  </p>
  
  <p> TO get the Range of IP address , <br>
    we can subtract the Host from the last octet of the Broadcast IP 193.16.20.39, which is <br>
    39 - 6 = 33 <br>
    
    This will give us the minimum range of IP address,193.16.20.33 <br>
    
    Therefore, the Range of IP address is: 193.16.20.33 - 193.16.20.39
    
    Minimum Range = 193.16.20.33
    Maximum Range = 193.16.20.39
    
  </p>
