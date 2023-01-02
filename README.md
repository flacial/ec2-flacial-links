# AWS — EC2

EC2 helps engineers create a customizable server in which they can customize its OS, resources, and firewall.

## Steps taken to create an EC2 instance

The steps here are what I chose my instance will use, but they don't necessrily mean this is what your instance should also use.

### Name and Tags

Where you choose the Instance name or add additional tags. 

The name I picked is `Flacial Links Server`

![image-20230102133604481](/Users/faisalalfateh/Library/Application Support/typora-user-images/image-20230102133604481.png)

### Application and OS Images

I chose Ubuntu x86 because I'm familiar with it and it uses less resources compared to Windows.

![image-20230102133616250](/Users/faisalalfateh/Library/Application Support/typora-user-images/image-20230102133616250.png)

### Instance type

In this section you choose the instance type or basically what CPU/Memory does the instance use.

The instance varies from 2 vCPU/1 GiB Memory to 96 vCPU/764 GiB Memory.

I picked t3.micro or 2 vCPU/1 GiB Memory because it's eligible to free tier.

![image-20230102133626619](/Users/faisalalfateh/Library/Application Support/typora-user-images/image-20230102133626619.png)

### Key pair

Generate an SSH key that'll be used to securely connect to the instance. Once you pick the algorithm and key name, you'll download a file that has the credentials. 

![image-20230102133636614](/Users/faisalalfateh/Library/Application Support/typora-user-images/image-20230102133636614.png)

### Network settings

Here you can configure the security group (who can communicate with the instance and who it can communicate with), SSH traffic (connecting to the instance), HTTPs, and HTTP.

I choose to enable HTTPs and HTTP traffi, and only allow my IP to connect to the instance.

![image-20230102133701519](/Users/faisalalfateh/Library/Application Support/typora-user-images/image-20230102133701519.png)

### Configure storage

Here we configure the storage the instance can have. We can choose up to 30 GB of storage in the free tier and this is what I picked.

![image-20230102133720728](/Users/faisalalfateh/Library/Application Support/typora-user-images/image-20230102133720728.png)

##### Additonal details

Advanced stuff that I didn't touch.

## Connecting to the instance

After creating the instance, this window will show and follow the guide named "Connect to your instance"

![image-20230102133502001](/Users/faisalalfateh/Library/Application Support/typora-user-images/image-20230102133502001.png)

## Hosting an app

To run an Express.js server in the instance, you should install node, npm, pm2 (for keep the process alive), and redirecting requests to 80 to your app port.

To redirect requsts, I used this command that I don't fully understand: `sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 5000`. It reroutes port 80 to port 500 or something.

The most tedious part was assigning a custom domain name to it. I use Vercel to manage my domain `flacial.dev`.
