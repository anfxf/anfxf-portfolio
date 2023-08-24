const request = require("request");
const express = require('express');
const app = express();
app.set("view engine","ejs");
app.use("/public",express.static(__dirname + "/public"))


app.get("/", async(req,res)=>{

    const projects_categorys = [{
        "Programming": [
            {
             "id":"ReOrgnize",
             "link":"/public/projects/ReOrgnize/ReOrgnize.html",
             "image":"/public/projects/ReOrgnize/Assets/thumbnail.png"
            },
            {
             "id":"RadialX",
             "link":"/public/projects/RadialX/RadialX.html",
             "image":"/public/projects/RadialX/Assets/thumbnail.png"
            },
            {
             "id":"GoogleCraper",
             "link":"/public/projects/GoogleCraper/GoogleCraper.html",
             "image":"/public/projects/GoogleCraper/Assets/thumbnail.png"
            }
        ]
    },
    {
        "Web Designing": [
            {
             "id":"DanzX",
             "link":"/public/projects/DanzX/DanzX.html",
             "image":"/public/projects/DanzX/Assets/thumbnail.png"
            },
            {
             "id":"TurnX",
             "link":"/public/projects/TurnX/TurnX.html",
             "image":"/public/projects/TurnX/Assets/thumbnail.png"
            },
            {
             "id":"FapTimeX",
             "link":"/public/projects/FapTimeX/FapTimeX.html",
             "image":"/public/projects/FapTimeX/Assets/thumbnail.png"
            }
        ]
    },
    {
        "3D":[
            {
             "id":"Blender_Guru_Course",
             "link":"/public/projects/Blender_Guru_Course/Blender_Guru_Course.html",
             "image":"/public/projects/Blender_Guru_Course/Assets/thumbnail.png"
            },
            {
             "id":"Apple_Busket",
             "link":"/public/projects/Apple_Busket/Apple_Busket.html",
             "image":"/public/projects/Apple_Busket/Assets/thumbnail.png"
            },
            {
             "id":"Blender_Guru_Course",
             "link":"/public/projects/Blender_Guru_Course/Blender_Guru_Course.html",
             "image":"/public/projects/Blender_Guru_Course/Assets/thumbnail.png"
            }
        ]
    }
    ]

    const abs_path = __dirname + "/views/main";
    res.render(abs_path,{data: projects_categorys})
})

app.all("*",(req,res)=>{
    const abs_path = __dirname + "/views/404";
    res.render(abs_path)
})

app.listen(4000,()=>{
    console.log("listening on http://localhost:4000 ");
})
