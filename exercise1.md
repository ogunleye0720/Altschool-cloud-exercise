<h1> How To Set Up Ubuntu 20.04 LTS On Your local Machine Using Vagrant. </h1>

The First step is to download and install a VirtualBox(preferably OracleVirtualBox) on your host machine. you can google search how to download and install the Oracle VirtualBox. or visit virtualbox.org
The Second Step is to download and set up vagrant on your host machine.
The Third step is to create a directory structure like this: C:\Users\Admin\Desktop\Altschool-Cloud\vagrant\boxes\ubuntu20.04 on your host machine. This directory is where Vagrant would store all its files, when created.
Open up any command line interface, and cd C:\Users\Admin\Desktop\Altschool-Cloud\vagrant\boxes\ubuntu20.04 for windows users, browse and findout the equivalent command for mac users.
still on the directory opened on the command line interface and on the directory, run the following command: 
C:\Users\Admin\Desktop\Altschool-Cloud\vagrant\boxes\ubuntu20.04 vagrant init ubuntu/focal64
press enter
this creates all the files for vagrant configurations.
the next command is 
C:\Users\Admin\Desktop\Altschool-Cloud\vagrant\boxes\ubuntu20.04 vagrant up
press enter
This will autoamtically create the virtual machine.
The next command is:
C:\Users\Admin\Desktop\Altschool-Cloud\vagrant\boxes\ubuntu20.04 vagrant ssh
This command allows us to access / enter the machine.

<p> The next step is to go back to our directory where we stored the vagrant in this case on my Desktop (C:\Users\Admin\Desktop\Altschool-Cloud)
Open the vagrant file with ant text editor(Vscode, sublime, etc)</p>

<p>Change the private network to type: "dhcp" as shown below:</p>

<p align="center">
<img src="https://github.com/ogunleye0720/Altschool-cloud-exercise/raw/main/alt-cloud2.JPG" height="10%" width="50%" />
</p>

<p> Back to the command line, run the command, ~$ ifconfig </p>

<p>incase of error: command not found? </p>
<p> do, ~$ sudo apt install net-tools </p>

once istalled do the following command;
<p> ~$ ifconfig </p>
The image below displays the expected output, which represents the three network layers actively running on the machine.
<p align="center">
<img src="https://github.com/ogunleye0720/Altschool-cloud-exercise/raw/main/altschool-cloud-ex1.JPG" height="10%" width="50%" />
</p>
