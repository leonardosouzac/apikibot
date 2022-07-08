#!/bin/bash
#
ARQUIVO="/etc/os-release"
LINHAS=()
PASSWORD="$1"
while read i
do
LINHAS[${contador:-0}]=$i
((contador++))
done < $ARQUIVO

echo ${LINHAS[0]}

if [[ $LINHAS[0] == "Ubuntu" ]]; then
  sudo apt install apache2-utils -y
else
  sudo yum install httpd-tools -y
fi
echo "$PASSWORD"

sudo htpasswd -b /etc/nginx/htpasswd-ee apiki "$PASSWORD"
docker restart nginx
~                                                                                                                             
~                                  
