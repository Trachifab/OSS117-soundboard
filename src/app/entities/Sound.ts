export class Sound{

    private id: number;

    public title: string;
    public character: string;
    public description: string;

    private file: string;

    public playing: Boolean = false;
    public audio: Audio = null;

    play() {

        if (!this.audio) {
            this.audio = new Audio('sounds/' + this.file);
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