/**
 * Created by iceeyes on 2017/7/18.
 */
//自动化构建
var projectData={
    'name':'miaov',
    'fileData':[{
        'name':'css',
        'type':'dir'
    },{
    'name':'js',
    'type':'dir'
  },{
    'name':'images',
        'type':'dir'
},{
    'name':'index.html',
        'type':'file'
}]
};
   var fs=require('fs');
if(projectData.name){
    fs.mkdirSync(projectData.name);
    var fileData=projectData.fileData;
    if(fileData&& fileData.forEach){
        fileData.forEach(function(f){
            f.path=projectData.name+"/"+ f.name;
            switch (f.type){
                case "dir":
                    fs.mkdirSync(f.path);
                    break;
                case "file":
                    fs.writeFileSync(f.path);
                    break;
                default :
                    break
            }
        })
    }
}