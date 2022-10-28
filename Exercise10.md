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
  
  <p> The total number of bits (m) left for host can be gotten from the expression : T<sub>b</sub> = m + n </p>
  
  ``` bash
   m = T<sub>b</sub> - n 
   m = 8 - 5 
   m = 3 
  ```
  
  <h3> The number of hosts per subnet can be gotten from the expression: 2^sub>m</sub> - 2 </h3>
  
  ``` bash
   2^<sup>m</sup> - 2
   2^<sup>3</sup> - 2
   8 - 2 = 6
   
   The Host = 6
  ```
