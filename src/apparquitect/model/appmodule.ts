
/**
 * class AppModule
 */
export class AppModule {

    public name: string;
    public description: string;
    public url: string;
    //public version: string;    
    //public icon: string;

    constructor(name: string,url: string, description: string) {
        this.name = name;
        this.url = url;
        this.description = description;
        
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}