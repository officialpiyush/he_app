# Heat Exchanger Calculator App
 Electron Base app for Calculating Heat Exchangers Capacity (area m2)

 Download or Clone using ```git clone https://github.com/acedesyne/he_app.git ```

 Use the package manager [node.js](https://nodejs.org/en/)

## Dependencies
 Capacitor by Ionic (Just follow the Installation below :P)

## Installation
 Run these command in the he_app directory

 Step-1 ``` npm install --save-dev electron-rebuild ``` This will rebuild and install node_modules

 Step-2 ``` npm install electron-packager -g ``` This will install Electron Packager, which will help to compile the code to make Executable file.

 Step-3 ``` electron-packager . <appname> . --asar ``` 
 
 Replace the ```<appname>``` whatever you like for example ``` electron-packager . myapp . --asar ``` to protect the source code we use ```---asar``` so that the compiled folder does not show the original source code of our app

 After the last Step you will find and electron folder and the complied Folder with name you have given in the last step ```example- myapp-win32-x64```





 

