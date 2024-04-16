const { hashSync } = require("bcrypt");
const role = require("../models/role");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Regions",
      [
        {
          name: "Дагестан",
          description:
            "Необычные туры и камерные экспедиции познакомят тебя с Дагестаном и подарят незабываемые впечатления. Организаторы и гиды — опытные проводники, которые продумали программу до мелочей и составили уникальный маршрут. Ты увидишь Дагестан глазами местных, наполнишься духом путешествий и познакомишься с крутыми людьми.",
            img: "https://discoverynn.ru/upload/resize_cache/webp/blog/blog-img/dagestan/DSC0423-HDR-Edit.webp",
            // img: "https://bronk.club/uploads/posts/2023-02/1676027262_bronk-club-p-dagestanskie-pozhelaniya-pinterest-34.jpg",
        },

        {
          name: "Ингушетия ",
          description:
            "Путешествия по Кавказу становятся всё популярнее, но Ингушетия порой остаётся без должного внимания. Самая маленькая республика региона кружит голову идиллическими пейзажами и древними легендами. А уникальные башенные комплексы манят исследовать многовековые тайны, сокрытые в каменных стенах. Отправимся открывать «страну башен», где слышны отголоски чеченской, осетинской и грузинской культур.",
          img: "https://tripplanet.ru/wp-content/uploads/europe/russia/ingushetia/dostoprimechatelnosti-ingushetii.jpg",
        },
        {
          name: "Кабардино-Балкария",
          description:
            "Кабардино-Балкария расположена в центре Кавказа, здесь есть высокие горы, красивые ущелья, горные озёра и целебные минеральные источники. Красавец Эльбрус и ещё шесть вершин высотой более 5000 метров, увенчанные белоснежными шапками, возвышаются над зелёными равнинами. Разнообразные возможности для активного отдыха привлекают сюда альпинистов, горнолыжников и просто любителей горных троп.",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/3540570/pub_5f47a7dd3c854b34532b27f6_5f47abbe01237e3109becdc2/scale_1200",
        },
        {
          name: "Чечня",
          description:
            "Чечня — одна из республик на Северном Кавказе, вокруг которой раскинулись живописные хребты Кавказских гор. Туристы сюда едут ради особой культуры, традиций горных народов, различных достопримечательностей и, конечно, природы. Самое большое горное озеро на Северном Кавказе, самый большой некрополь, самобытная кухня, низкие цены и небольшая территория республики — вот далеко не все особенности Чечни.",
          img: "https://upload.wikimedia.org/wikipedia/commons/2/22/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%B5%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B1%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%AD%D1%80%D0%B7%D0%B8%2C_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82_%D0%B2_%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B5_%D0%90%D1%80%D0%BC%D1%85%D0%B8%2C_%D0%98%D0%BD%D0%B3%D1%83%D1%88%D0%B5%D1%82%D0%B8%D1%8F%2C_%D0%B3%D0%BE%D1%80%D1%8B_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B0.jpg",
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