interface objectData {
    id: string,
    txt: string,
    color: string,
    underline: boolean
}

class TxtData {
    constructor() {
        this.txt = ""
        this.data = [];
        this.index = 1
        this.color = "ffffff"
        this.underline = false
    }

    txt: string;
    data: objectData[];
    color: string;
    index: number;
    underline: boolean;

    setData(txt: string) {
        this.txt = txt;
        this.data = [];
        this.index = 1
        for (let i of txt) {
            this.data.push({id: this.index.toString(), txt: i, color: this.color, underline: false});
            this.index++
        }
    }

    setColor(id: string) {
        const element = document.getElementById(id);
        if (!element) return;
        element.style.color = "#" + this.color;
        for (let i in this.data) {
            if (id === this.data[i].id) {
                this.data[i].color = this.color;
            }
        }
    }

    changeColor(color: string) {
        this.color = color;
    }

    setUnderline(id: string) {
        const element = document.getElementById(id);
        if (!element) return;
        if (this.underline) {
            element.style.textDecoration = "underline";
        } else {
            element.style.textDecoration = "none";
        }
        for (let i in this.data) {
            if (id === this.data[i].id) {
                this.data[i].underline = this.underline;
            }
        }
    }

    getData(): string {
        let temp: string = "";
        let temp_color: string = "";
        let temp_underline: boolean = false;
        for (let i of this.data) {
            if (i.color != temp_color) {
                temp = temp + "#c" + i.color
                temp_color = i.color
            }
            if (i.underline != temp_underline) {
                temp = temp + (i.underline ? "#E" : "#e");
                temp_underline = i.underline
            }
            temp = temp + i.txt
        }
        return temp;
    }
}

const txtData = new TxtData();
export default txtData;