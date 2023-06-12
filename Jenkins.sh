#!/bin/bash

#Jenkins script to install jenkins on vatious linux distribution 

# Detect the Linux distribution

if [ -f /etc/redhat-release ]; then

    # CentOS or RHEL

    echo "Installing Jenkins on CentOS/RHEL"

    sudo yum update -y

    sudo yum install -y java-1.8.0-openjdk wget

    sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

    sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key

    sudo yum install -y jenkins

    sudo systemctl start jenkins

    sudo systemctl enable jenkins

elif [ -f /etc/lsb-release ]; then

    # Ubuntu

    echo "Installing Jenkins on Ubuntu"

    sudo apt-get update

    sudo apt-get install -y openjdk-8-jdk wget

    wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

    sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

    sudo apt-get update

    sudo apt-get install -y jenkins

    sudo systemctl start jenkins

    sudo systemctl enable jenkins

else

    echo "Unsupported Linux distribution."

    exit 1

fi

