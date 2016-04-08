"use strict";
const co = require("co");
const fs = require("fs-extra-promise");
const path = require("path");
const glob = require("glob-promise");
const yaml = require("yaml-front-matter");
const ECT = require("ect");

co(function* (){
    const PUBLIC_DIR = "public";
    const SLIDE_DIR = "slide";
    const files = yield glob("**/*", { cwd: SLIDE_DIR });
    const slides = [];
    
    // ECT renderer
    const renderer = ECT({ root: path.resolve(__dirname, "layout") });
    
    for (let i=0; i<files.length; i++) {
        const file = path.resolve(SLIDE_DIR, files[i]);
        
        if (/\.md$/.test(file)) {
            // ファイル読み込み
            const data = yield fs.readFileAsync(file, "utf8");
            const parsedData = yaml.loadFront(data);
            
            // 変換するファイル名
            const htmlFileName = `${path.basename(file, ".md")}.html`;
            slides.push({
                title: parsedData.title,
                date: parsedData.date,
                file: htmlFileName
            });
            console.log(parsedData.title);
            
            // ectでhtml生成
            const slideData = renderer.render('slide.ect', parsedData);
            
            // ファイル出力
            const dist = path.resolve(PUBLIC_DIR, SLIDE_DIR, htmlFileName);
            yield fs.outputFileAsync(dist, slideData, "utf8");
            console.log(`${dist} created.`);
        }
    }
    
    // index.html作成
    slides.sort(function(a, b) {
        return a.date > b.date ? 1 : -1;
    });
    // ejsでhtml生成
    const indexData = renderer.render('index.ect', { slides });
    const dist = path.resolve(PUBLIC_DIR, "index.html");
    yield fs.outputFileAsync(dist, indexData, "utf8");
    console.log(`${dist} created.`);
}).catch((err) => {
    console.error(err);
});


