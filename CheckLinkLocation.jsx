//Check link locations to ensure that all links are in the correct folder

LinkCheck();

function LinkCheck() {
    
      var sourceDoc = app.activeDocument;
      var mLinks = sourceDoc.links.everyItem().getElements();  
      var destFolder = "~/Desktop/copiedLinks/";  
      var currLinkFName, currFile;  
      var len = mLinks.length;
      
      destFolder = Folder.selectDialog("Choose target folder to save the log text files") + "/";  
      
     //If the target folder for the log file does not exist, create it 
    if ( !Folder(destFolder).create() ) exit(); 
    
    //Check if Log File Already exists
    
    //If the log file does not exist, then create a new file
    var textFile = new File(destFolder + "/" + sourceDoc.name + " - LogFile.txt");
     
    textFile.open("w");
    textFile.writeln(sourceDoc.name + "\r\n")
      
    //Iterate through links in document
    while (len-->0) {
      //Get file path of current link
      currLinkFName = mLinks[len].filePath;
      var errorFlag = ""
      //Revise the target folder path below per your specific use case
      if (currLinkFName.indexOf('Target Folder Path') === -1 ) {
          errorFlag = "ERROR - CHECK LINK --> "
          }
      textFile.writeln(errorFlag + currLinkFName)

      //Append link to text file in target folder
      //currFile = File( destFolder + File(currLinkFName).name );  
      //if ( !currFile.exists && File(currLinkFName).exists )   
      //mLinks[len].copyLink(currFile);

      }
  
       textFile.close();
    
    
    }

