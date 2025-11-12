 // Dolu olan klasörleri burada belirle
    const filledFolders = ["universite", "languages", "hobby"];
    
    function openFolder(folderName) {
      if (filledFolders.includes(folderName)) {
        // Klasör doluysa yönlendir
        window.location.href = folderName + "/index.html";
      } else {
        // Klasör boşsa uyarı ver
        alert(folderName + " klasörü şu anda boş. İleride içeriği eklenecek!");
      }
    }