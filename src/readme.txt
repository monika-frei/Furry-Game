index.js -> ma zawierać cały kod do skompilowania przez webpack
main.css-> zaimportować do index.js import "./main.css"
template.html -> zawiera cały kod html, bez dodanych skryptów, styli,..., doda je webpack za pomocą htmlwebpackplugin
obrazy w index html  jako src = "./assets/images/nazwa.jpg"-> webpack nadaje nową nazwę i kopiuje obraz do folderu dist podmieniając ścieżkę 