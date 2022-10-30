const content = "PET PLANET은 반려동물을 위한 반려동물 용품 브랜드로 \n     반려동물 친구들의 생활에 한발자국 더 다가가 반려동물 뿐만 아닌 \n 반려인이 사용하기에도 좋은 브랜드 입니다.               ";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 100)
