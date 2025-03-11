export default {
    methods: {
      checkMobile() {
        return this.data?.checkMobile ?? false;
      },
      getImage(image, imageMobile = null) {
        if (!image) {
          return '';
        }
        if (imageMobile === null) {
          imageMobile = image;
        }
        return this.checkMobile() ? imageMobile : image;
      },
      ignoreTags(str, replace = ['</p><p>'], tags = ['<br>'], letTags = '<br>, <strong>, <span>, <b>') {
        str = str.replace(new RegExp(replace.join('|'), 'g'), tags.join(''));
  
        const allowedTags = new RegExp(`<(?!(${letTags.replace(/ /g, '').split(',').join('|')}))\\w+>`, 'g');
        str = str.replace(allowedTags, '');
  
        str = str.replace(/&nbsp;/g, ' ');
  
        while (str.includes('<br><br>') || str.includes('<br> <br>')) {
          str = str.replace(/<br><br>/g, '<br>').replace(/<br> <br>/g, '<br>');
        }
  
        return str.trim();
      },
      imgSrcJson(imageDataString) {
        try {
          const imageData = JSON.parse(imageDataString);
          return imageData?.src || "";
        } catch (error) {
          return "";
        }
      },
      imgAltJson(imageDataString) {
        try {
          const imageData = JSON.parse(imageDataString);
          return imageData?.alt || "";
        } catch (error) {
          return "";
        }
      },
      imgTitleJson(imageDataString) {
        try {
          const imageData = JSON.parse(imageDataString);
          return imageData?.title || "";
        } catch (error) {
          return "";
        }
      },
      assetJson(folder, image, imageMobile) {
        const src = this.imgSrcJson(this.getImage(image, imageMobile));
        return src ? `/userfiles/${folder}/${src}` : '';
      },
      asset(path) {
        // const baseRoute = document.getElementById('baseRoute').value;
        return path;
      },
      character_limiter(text, limit) {
        if (!text) return "";
        if (text.length <= limit) return text;
        return text.substring(0, limit) + "...";
    },
    formatDateExtenso(dateString) {
        if (!dateString) return "";

        const date = new Date(dateString);
        if (isNaN(date)) return "Data inválida";

        const meses = {
            "01": "Janeiro",
            "02": "Fevereiro",
            "03": "Março",
            "04": "Abril",
            "05": "Maio",
            "06": "Junho",
            "07": "Julho",
            "08": "Agosto",
            "09": "Setembro",
            "10": "Outubro",
            "11": "Novembro",
            "12": "Dezembro",
        };

        const dia = date.getDate().toString().padStart(2, "0");
        const mes = meses[date.toLocaleDateString("pt-BR", { month: "2-digit" })];
        const ano = date.getFullYear();

        return `${dia} de ${mes}, ${ano}`;
    }
    }
};  