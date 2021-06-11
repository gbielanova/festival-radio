# Festival radio
This is an exam project for Beetroot Academy FrontEnd course. 

## Purpose
User should be able to easilly generate playlists for specific festival and artists set, listen them from the same page and follow.

## Components

### Client
React app.
Responsible for interaction with API and Spotify components.

#### Run locally
0. First run: run command **npm install**
1. run command **npm start**

### Server
Responsible for refresh token.

#### Run locally
0. First run: run command **npm install**
1. run command **npm run devStart**

#### Run on AWS
0. First run: copy instance IPv4 address and update useAuth.js to listen it
1. Connect by **ssh** to EC2
2. Go to work folder `cd /usr/local/apps/festival-radio/server`
3. Run update script **npm run devStart**

### API
Django app.
Responsible for communication with database.


#### Endpoints
| URI | Description | Fields |
| ----------- | ----------- | ----------- |
| /api/festival/ | Manages available festivals | `{"name": String,"logo_url": String}`| 
| /api/artist/ | Manages available artists | `{"name": String}` |
| /api/festival-artists/ | Manages relation between artists and festivals. | `{"festival_id": Int,"artist_id": Int}`|
| /api/playlist/ | Manages playlists | `{"festival_id": Int,"artists": [Int],"name": string,"spotify_token": string}`|

#### Run locally
0. Install VirtualBox, Vagrant
1. Start Vagrant `vagrant up` 
2. Connect to Vagrant `vagrant ssh`
3. Go to sync folder `cd /vagrant`
4. Create virtual environment `python -m venv ~/env`
5. Activate virtual environment `source ~/env/bin/activate`
6. Install ependencies `pip install -r requirements.txt`
7. Create migration if db was changed `python manage.py makemigrations`
8. Run migration `python manage.py migrate`
9. Start Django `python manage.py runserver 0.0.0.0:8000`

#### Deploy to AWS
1. Sign up for AWS Free Tier
2. Get ssh key `cat ~/.ssh/id_rsa.pub`
3. At AWS Console **EC2** add **Key Pairs** with ssh key
4. At AWS Console **EC2** create instance of **Ubuntu Server 18.04 LTS(HVM)** with **t2.micro** type. In Change configuration **Configure Security Group** add Rule for **HTTP**. Select key pair and Launch.
5. Copy **Public DNS (IPv4)** for running service EC2
6. At local machine run command `ssh ubuntu@<your Public DNS (IPv4)>`
7. Run setup script `curl -sL https://raw.githubusercontent.com/gbielanova/festival-radio/master/api/deploy/setup.sh | sudo bash -
`
8. Update **settings.py** - add **Public DNS (IPv4)** and **127.0.0.1**
9. First run - create s superuser to manage db, run `sudo env/bin/python manage.py createsuperuser`

#### Update AWS instance
1. Connect by **ssh** to EC2
2. Go to work folder `cd /usr/local/apps/festival-radio/api`
3. Run update script `sudo sh ./deploy/update.sh`
