export class Sound{

    public id: number;

    public title: string;
    public character: string;
    public description: string;

    public fileUrl: string;

    public playing: Boolean = false;
    public audio = null;

    constructor(id: number, title: string, description: string, fileUrl: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.fileUrl = fileUrl;
    }

    public play() {

        if (!this.audio) {
            this.audio = new Audio(this.fileUrl);
        }

        this.audio.play();
        this.audio.onended = this.stop.bind(this);
        this.audio.onpause = this.stop.bind(this);

        this.playing = true;

    };

    stop() {

        if (this.audio && !this.audio.paused ) {
            this.audio.pause();
            this.audio.load();
        }

        this.playing = false;
    };

    getSoundDetail() {
        return this.character + '-' + this.description;
    };

}