
export class Content {
    title: string;
    description: string;
    create_at: Date;
    tag: string[];
    url_type: string;
    url: string;
    img: string;
    img_brt: number;
    img_pos: string;


    constructor(title: string, description: string, create_at: Date, tag: string[], url_type: string, url: string, img: string, img_brt: number, img_pos: string) {
        this.title = title;
        this.description = description;
        this.create_at = create_at;
        this.tag = tag;
        this.url_type = url_type;
        this.url = url;
        this.img = img;
        this.img_brt = img_brt;
        this.img_pos = img_pos;
    }
}

export const contents = [
    new Content("Routepia", "人生足跡記録アプリ", new Date(2025, 4, 23), ["Native"], "GitHub", "https://github.com/LIZ-Development/Routepia", `${import.meta.env.BASE_URL}img/routepia.jpg`, 0.6, "center"),
    new Content("Snipe me", "Cubeを貫くパズルゲーム", new Date(2025, 11, 9), ["Web"], "GitHubPages", "https://t0rixs.github.io/snipeme/", `${import.meta.env.BASE_URL}img/snipeme.png`, 0.7, "center"),
    new Content("Togo", "飛行機/高速バスの予約管理ツール", new Date(2025, 8, 1), ["Web"], "GitHubPages", "https://t0rixs.github.io/Togo/", `${import.meta.env.BASE_URL}img/togo.png`, 0.7, "top"),
    new Content("PocketReception", "無人図書館のための蔵書管理ツール", new Date(2024, 9, 14), ["Web"], "GitHub", "https://github.com/t0rixs/PocketReception", `${import.meta.env.BASE_URL}img/pocketreception.jpg`, 0.6, "center"),
    new Content("Portfolio", "これ", new Date(2024, 12, 13), ["Web"], "GitHub", "https://github.com/t0rixs/Portfolio", `${import.meta.env.BASE_URL}img/Portfolio_screen.png`, 0.6, "top"),
]