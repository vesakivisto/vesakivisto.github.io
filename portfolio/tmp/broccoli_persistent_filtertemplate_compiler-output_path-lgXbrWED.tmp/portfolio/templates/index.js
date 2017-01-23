export default Ember.HTMLBars.template({"id":"ibenIBIN","block":"{\"statements\":[[\"comment\",\" ABOUT \"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"twelve column\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Hello World!\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I'm Vesa Kivistö, an aspiring developer ready to conquer the world. I'm currently studying software engineering at JAMK University of Applied Sciences, Jyväskylä Finland.\\n    I'm interested web, mobile and desktop developing, I have experience in full-stack development and I'm always looking forward to learning something new.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I've always been interested in information and communications technology as well as programming, which led to me starting to study software development at\\n      Saimaa Vocational College Sampo. After graduation from SAMPO with a Bachelor's Degree and a Matriculation Examination Certificate in I started my studies\\n      on software engineering at JAMK University of Applied Sciences. I have interest in applying for a Master's Degree and specializing in artificial intelligence\\n      or machine learning later in my life, but I have no plans set in stone.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I spend my spare time usually by playing video games and listening to music. I also enjoy photographing and reading fantasy and sci-fi books, and once in a while\\n      I enjoy taking a walk in nature to clear my mind. I'm still really new to photographing and it has been a slow start with that hobby, but I'm eager\\n      to improve my photographing skills. Lately I've been trying to start personal programming projects to improve my programming skills.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\" PROJECTS \"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"portfolio-header\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Welcome! Here's my projects\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"projects\"]]],null,7],[\"text\",\"\\n\"],[\"comment\",\" EXPERIENCE \"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"twelve column\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Personal info\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"personalInfos\"]]],null,6],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Work experience\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"workExperiences\"]]],null,5],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Education\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"educations\"]]],null,3],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Languages\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"languages\"]]],null,2],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Technical skills\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"skills\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"skill\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"skill\",\"items\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"skill\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"cv-info\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"language\",\"title\"]],false],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"language\",\"level\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"language\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"education\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"education\",\"school\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"education\",\"duration\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"education\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"education\"]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"work\",\"duration\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"work\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"work\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"experience\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"experience\",\"work\"]]],null,4],[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"experience\",\"duration\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"experience\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"experience\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"cv-info\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"info\",\"title\"]],false],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"info\",\"description\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"info\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row portfolio-item\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"five columns\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"project\",\"image\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"seven columns\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"project\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"project\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"project\"]}],\"hasPartials\":false}","meta":{"moduleName":"portfolio/templates/index.hbs"}});