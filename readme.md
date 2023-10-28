# EXPRESS GENTERATOR -

There is lots of time waste to setup express , to save this time we use express generator and it will make folder structure for you and it will also right basic code for project.

- expres generator create folder, you don't need to create folder, express genterator give all files in this folder

- Steps to express generator

1. Install globally:

   - npm i express-generator -g

2. To create new app anywhere :

   - open cmd move to desktop
   - express appname --view=ejs

3. Now use two cmd
   - cd appname
   - npm i
   - open it in vs Code

# MONGO DATABASE ( mongodb )

- App we created and the data of these app is store in a place this place is called database
- Mainly two type of database: Relational and Non-Relational

        [ CODE SIDE  ]                    [  MONGO DB SIDE  ]

          DB SETUP                ->          DB FORMATION

           MODEL ( code )         ->           COLLECTION ( in database part)

           SCHEMA ( code )        ->            DOCUMENTS ( in database )

- DATABASE : Data of whole app.
- COLLECTOIN and MOEDEL : Variety of data of a single app which have whole data of single app and the sub category of data is called COLLECTION created by MODEL.
- SCHEMA and DOCUMENTS: Whole data of users from app is collection and when we talk about a single user data from this users collection is called DOCUMENT created by SCHEMA.

Steps :

- install mongodb
- install mongoosejs
- require and setup connection
- make schema
- create model and export

# NOW WE STUDY ABOUT CREATION, DELETION, UPDATE AND READING

- To create use exportedFile.create()
- To read use exportedFile.find() ( it will find all data related to schema)
- To read data of single user exportedFile.findOne().
- To delete use exportedFile.findOneAndDelete() ( it will delete single file).

# SESSION and COOKIES:

- Understanding sessions

1. install package npm i express-session.
2. To create : req.session.koibhiname = koibhivalue
3. To read : req.session.koibhiname
4. To delete session : req.session.destroy(callback function)

- Understanding cookies

1. need package cookie parser which is alredy installed by express generator or already setup by express generator.
2. cookie setup : res.cookie("name",value)
3. cookie reading : req.cookies.name
4. cookie delete : res.clearCookie("name")
