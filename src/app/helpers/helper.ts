export class Helper {

    static async loadImage(url: string, elem: any) {
        return new Promise((resolve, reject) => {
            elem.onload = () => resolve(elem);
            elem.onerror = reject;
            elem.src = url;
        });
    }
}

