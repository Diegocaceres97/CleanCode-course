
    // plicando el principio de responsabilidad única
    //priorizar composicion frente a la herencia

    type Genderr = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        Gender    : Genderr;
        name      : string;
    }

    class Personn {
        public birthdate: Date;
        public Gender   : Genderr;
        public name     : string;

        constructor({ name, Gender, birthdate }: PersonProps ){
            this.name      = name;
            this.Gender    = Gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }

    class User  {
        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        Gender           : Genderr;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class Settings  {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    class UserSettings {
        public person: Personn;
        public user: User;
        public settings: Settings;

        constructor(
            {
                name,
                Gender,
                birthdate,
                email,
                role,
                lastOpenFolder, workingDirectory
            }: UserSettingsProps 
        ){
            this.person = new Personn({name,Gender,birthdate});
            this.user = new User({email,role})
            this.settings = new Settings({lastOpenFolder, workingDirectory});
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1997-10-21'),
        email: 'diego@gmail.com',
        Gender: 'M',
        lastOpenFolder: '/home',
        name:'Diego',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });
