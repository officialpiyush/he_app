# Heat Exchanger Calculator App
 Electron Base app for Calculating Heat Exchangers Capacity (area m2)

 Download or Clone using ```git clone https://github.com/acedesyne/he_app.git ```

 Use the package manager [node.js](https://nodejs.org/en/)

## Dependencies
 Capacitor by Ionic (Just follow the Installation below :P)

## Installation
 Run these command in the he_app directory
 
 Step-1 - ``` npm install --save @capacitor/core @capacitor/cli ```

 Step-2 - ``` npx cap init ``` follow the steps

 Step-3 - ``` npm init ``` follow the steps

 Step-4 - ``` npx cap add electron ``` this will install electron
 
 Use ```npx cap copy``` if need to update the app from the source code - (Skip this for now)

 Step-5 ``` npx cap open electron ``` - ( USe this command to inspect the app in the browser window ) or Skip

 Step-6 ``` npm install electron-packager -g ``` This will install Electron Packager, which will help to compile the code to make Executable file.

 Before the last step ``` cd electron ``` to the electron folder created in the Directory

 Step-7 ``` electron-packager . <appname> . --asar ``` 
 
 Replace the ```<appname>``` whatever you like for example ``` electron-packager . HE_APP . --asar ``` to protect the source code we use ```---asar``` so that the compiled folder does not show the original source code of our app

 After the last Step you will find and electron folder and the complied Folder with name you have given in the last step ```example- HE_APP-win32-x64```





 

