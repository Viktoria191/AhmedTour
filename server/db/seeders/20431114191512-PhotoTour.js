/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PhotoTours",
      [
        {
          img1: "https://kartinki.pics/pics/uploads/posts/2022-08/1661273791_27-kartinkin-net-p-gori-dagestana-oboi-krasivo-31.jpg",
          img2: "https://upload.wikimedia.org/wikipedia/commons/1/10/Sulak_Canyon_in_Dagestan.jpg",
          img3: "https://priroda.club/uploads/posts/2022-06/1655733536_1-priroda-club-p-kanon-v-dagestane-priroda-krasivo-foto-1.jpg",
          img4: "https://kartinki.pics/pics/uploads/posts/2022-08/1661273878_28-kartinkin-net-p-gori-dagestana-oboi-krasivo-32.jpg",
        },
        {
          img1: "https://priroda.club/uploads/posts/2021-12/thumbs/1638957387_16-priroda-club-p-gori-dagestana-priroda-krasivo-foto-17.jpg",
          img2: "https://ic.pics.livejournal.com/mg5642/66429722/2709295/2709295_original.jpg",
          img3: "https://gamsutl.com/ru/wp-content/uploads/sites/2/2021/05/bg.jpg",
          img4: "https://img.geliophoto.com/sarykum/00_sarykum.jpg",
        },
        {
          img1: "https://rg.ru/uploads/images/156/16/93/magas_d_850r.jpg",
          img2: "https://extraguide.ru/images/t/37a36940f8b7ed74424853f6e5bcdfe45c209513.jpg",
          img3: "https://extraguide.ru/images/t/c79db1c751d0d8246188e8f894a7ef968699f1ca.jpg",
          img4: "https://extraguide.ru/images/t/afae76ec18123daf0cfe70c29c488f60d9051a76.jpeg",
        },
        {
          img1: "https://static.aviasales.com/p-static/ru/uploads/2023/08/gory-bashni.jpg",
          img2: "https://upload.wikimedia.org/wikipedia/commons/2/22/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%B5%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B1%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%AD%D1%80%D0%B7%D0%B8%2C_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82_%D0%B2_%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B5_%D0%90%D1%80%D0%BC%D1%85%D0%B8%2C_%D0%98%D0%BD%D0%B3%D1%83%D1%88%D0%B5%D1%82%D0%B8%D1%8F%2C_%D0%B3%D0%BE%D1%80%D1%8B_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B0.jpg",
          img3: "https://i.pinimg.com/736x/58/b9/91/58b99117511482df3ade2988433bc4f6.jpg",
          img4: "https://priroda.club/uploads/posts/2022-09/thumbs/1662274306_4-priroda-club-p-gornaya-ingushetiya-krasivo-foto-4.jpg",
        },
        {
          img1: "https://darsik.com/wp-content/uploads/2019/04/untitled-1-2-4.jpg",
          img2: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%D0%93%D0%BE%D1%80%D1%8B%2C_%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%B0_%D0%B8_%D1%81%D0%BD%D0%B5%D0%B3._%D0%9A%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B8%D0%BD%D0%BE-%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D0%B8%D1%8F.jpg",
          img3: "https://www.atorus.ru/sites/default/files/upload/image/News/52542/%D1%84%D0%BE%D1%82%D0%BE%201.JPG",
          img4: "https://putidorogi-nn.ru/images/stories/evropa/rossiya/kabardino_balkarskaya_respublika_4.jpg",
        },
        {
          img1: "https://waterfal.ru/wp-content/uploads/2020/03/-%D0%B2%D0%BE%D0%B4%D0%BE%D0%BF%D0%B0%D0%B4%D1%8B-%D0%93%D0%B5%D0%B4%D0%BC%D0%B8%D1%88%D1%85-e1585219817217.jpg",
          img2: "https://mygeografi.ru/wp-content/uploads/2022/01/kabardino-balkariya.jpg",
          img3: "https://www.atorus.ru/sites/default/files/upload/image/News/52542/%D1%84%D0%BE%D1%82%D0%BE%201.JPG",
          img4: "https://sun9-51.userapi.com/impg/8j6MX7ENp0CwcKMm9ZHobFD_kni1OWLkXlakJw/KA4FUnC6Vpw.jpg?size=1200x799&quality=96&sign=fdf3ee6e63b550b9c8f8969c922977de&type=album",
        },
        {
          img1: "https://rgo.ru/upload/content_block/images/e0c8c5b29cfd61dcf3c4b5f1b2d6a92d/aadedbc00cfbf5bef01c6aa8796a202f.jpg",
          img2: "https://drivenew.ru/upload/iblock/12f/12f49444157fea9a8f6a1af02131cff3.jpg",
          img3: "https://otdihvrossii.ru/wp-content/uploads/2018/07/gory-chechni.jpg",
          img4: "https://icdn.bolshayastrana.com/1200x00/02/73/027392337d139a5927d0178954ee7b2b.jpeg",
        },
        {
          img1: "https://s8.stc.all.kpcdn.net/russia/wp-content/uploads/2022/10/dostoprimechatelnosti-ingushetii-1220.jpg",
          img2: "https://youtravel.me/upload/medialibrary/e9a/e9afa3379d76da7e9660edab156acb84.jpg",
          img3: "https://uniticket.ru/wp-content/uploads/2022/03/V-CHechne-ochen-zhivopisnye-peyzazhi1-1024x683.jpg",
          img4: "https://must-see.top/wp-content/uploads/2018/10/groznyj-siti.jpg",
        },
        {
          img1: "https://icdn.bolshayastrana.com/940x00/93/44/9344d4d69ba6de5c06b73653144d5077.jpeg",
          img2: "https://locall.website.yandexcloud.net/uploads/2022/10/alexey-elfimov-KEeZknH2UJY-unsplash-1140x760.jpg",
          img3: "https://discoverynn.ru/upload/resize_cache/webp/blog/blog-img/dagestan/DSC9512-Edit-2.webp",
          img4: "https://radioiskatel.ru/wp-content/uploads/2018/09/sulakskij-kanon-v-dagestane.jpg",
        },
        {
          img1: "https://krasivye-mesta.ru/img/Memorialnyy-Kompleks-Zhertvam-Repressiy-2.jpg",
          img2: "https://severnykavkaz.ru/wp-content/uploads/2019/03/klimat-ingushetii.jpg",
          img3: "https://cdn.tripster.ru/thumbs2/754c7cc2-5d86-11ec-be43-4e535e1c4b22.800x600.jpeg",
          img4: "https://krasivye-mesta.ru/img/Dolina-Reki-Armkhi.jpg",
        },
        {
          img1: "https://www.atorus.ru/sites/default/files/upload/image/News/52542/image1.jpeg",
          img2: "https://public.mishka.travel/images/mini/089aa0ac1266e79.jpg",
          img3: "https://youtravel.me/upload/medialibrary/32d/7ugylslrj3wjas49zs1kqka3z730yoac.jpg",
          img4: "https://avatars.dzeninfra.ru/get-zen_doc/3540570/pub_5f47a7dd3c854b34532b27f6_5f47abbe01237e3109becdc2/scale_1200",
        },
        {
          img1: "https://aif-s3.aif.ru/images/007/164/d579ff3413bf48c54619a7c86fa62398.jpg",
          img2: "https://a.d-cd.net/b9YksXJp_Wkm6MeAvJO5YmRibi8-1920.jpg",
          img3: "https://ic.pics.livejournal.com/uritsk/19436209/7690501/7690501_original.jpg",
          img4: "https://must-see.top/wp-content/uploads/2018/10/drevnij-gorod-hoj-700x467.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
