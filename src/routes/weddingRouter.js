const express = require("express");
const Attende = require("../models/Attende");
const Wedding = require("../models/Wedding");
const Media = require("../models/Media");
const attendeData = [
  {
    wedding: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    first_name: "Fitzgerald",
    last_name: "Cleveland",
    gender: "male",
    email: "fitzgeraldcleveland@zosis.com",
    phone: "+1 (916) 590-3542",
    registered: "2023-04-01T12:31:42 -06:-30",
    socialMediahandles: {
      twitter: "http://placehold.it/32x32",
      facebook: "http://placehold.it/32x32",
      linkdin: "http://placehold.it/32x32",
      instagram: "http://placehold.it/32x32",
    },
    groomsmen: true,
    bridesmaid: false,
    picture: "http://placehold.it/32x32",
  },
  {
    wedding: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    first_name: "Garner",
    last_name: "Maynard",
    gender: "male",
    email: "garnermaynard@zosis.com",
    phone: "+1 (843) 537-2520",
    registered: "2021-11-24T05:12:13 -06:-30",
    socialMediahandles: {
      twitter: "http://placehold.it/32x32",
      facebook: "http://placehold.it/32x32",
      linkdin: "http://placehold.it/32x32",
      instagram: "http://placehold.it/32x32",
    },
    groomsmen: false,
    bridesmaid: false,
    picture: "http://placehold.it/32x32",
  },
  {
    wedding: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    first_name: "Deann",
    last_name: "Pierce",
    gender: "female",
    email: "deannpierce@zosis.com",
    phone: "+1 (876) 432-2996",
    registered: "2015-10-25T06:54:13 -06:-30",
    socialMediahandles: {
      twitter: "http://placehold.it/32x32",
      facebook: "http://placehold.it/32x32",
      linkdin: "http://placehold.it/32x32",
      instagram: "http://placehold.it/32x32",
    },
    groomsmen: true,
    bridesmaid: true,
    picture: "http://placehold.it/32x32",
  },
  {
    wedding: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    first_name: "Jeri",
    last_name: "Morris",
    gender: "female",
    email: "jerimorris@zosis.com",
    phone: "+1 (952) 455-2628",
    registered: "2016-08-12T06:58:08 -06:-30",
    socialMediahandles: {
      twitter: "http://placehold.it/32x32",
      facebook: "http://placehold.it/32x32",
      linkdin: "http://placehold.it/32x32",
      instagram: "http://placehold.it/32x32",
    },
    groomsmen: true,
    bridesmaid: true,
    picture: "http://placehold.it/32x32",
  },
  {
    wedding: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    first_name: "Jocelyn",
    last_name: "Simmons",
    gender: "female",
    email: "jocelynsimmons@zosis.com",
    phone: "+1 (995) 464-2130",
    registered: "2015-07-06T10:20:44 -06:-30",
    socialMediahandles: {
      twitter: "http://placehold.it/32x32",
      facebook: "http://placehold.it/32x32",
      linkdin: "http://placehold.it/32x32",
      instagram: "http://placehold.it/32x32",
    },
    groomsmen: false,
    bridesmaid: true,
    picture: "http://placehold.it/32x32",
  },
  {
    wedding: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    first_name: "Barnett",
    last_name: "Heath",
    gender: "male",
    email: "barnettheath@zosis.com",
    phone: "+1 (809) 403-3688",
    registered: "2015-04-27T04:04:17 -06:-30",
    socialMediahandles: {
      twitter: "http://placehold.it/32x32",
      facebook: "http://placehold.it/32x32",
      linkdin: "http://placehold.it/32x32",
      instagram: "http://placehold.it/32x32",
    },
    groomsmen: false,
    bridesmaid: true,
    picture: "http://placehold.it/32x32",
  },
];
const mediaData = [
  {
    wedding: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    images: [
      {
        guid: "4c191465-159b-457c-812b-47aa82f31b91",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "c779f02e-28d5-4532-973a-5774fc0b5ff0",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "a6620143-815e-4e4d-92e0-f3387678c040",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "6572f691-a4c8-4e44-b7b2-41c30b780d68",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "d356f1fa-2a42-4b10-8d27-cc3e5d2536e7",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
    ],
    videos: [
      {
        guid: "8c803c5e-9956-4a57-b562-b94bba30be55",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "2be02178-a1ac-47a8-9e6d-d6a82c29e25e",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "ec255513-a32f-4006-a290-44e3ba3b563a",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "a084f43d-975a-475b-909d-b0c25cf12edb",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "f7e0412c-cb48-4cf4-9dcb-d8608d3f4864",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
    ],
  },
  {
    wedding: "6e9c19bb-33e8-4749-b816-7418e785412e",
    images: [
      {
        guid: "057ba32a-ee4d-404a-9890-8353a80607ec",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "bf6d7289-1b70-4033-8e28-36255aa29523",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "4b369cb4-eec1-496e-97e1-c5ca33bb5159",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "f6fcf6bb-7767-48d9-899a-a9f73ca9e8cb",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "c4205256-b5eb-4be7-8106-5b8ab7cfb8a9",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
    ],
    videos: [
      {
        guid: "cb68202a-9c5d-4292-8b3f-b42e8572a3d0",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "c3578ce7-bc19-48de-a7dc-83b5283830ce",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
      {
        guid: "6dc0828f-db7c-4247-97a6-5ec808a72f2c",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "039ac956-40ee-4207-970d-c2c175da9466",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "e9dd5b69-fe2f-46a9-aa88-30c51588dbd7",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
    ],
  },
  {
    wedding: "a1e210dd-2dc5-41df-8cfe-b90f92af866f",
    images: [
      {
        guid: "ab3d447c-2e0b-44ed-b0ab-8a6da7f78deb",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "3a870bb4-1665-4c69-b05f-7abd19073688",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "fe3235d6-dab7-4390-831c-5bebd6f4b8a0",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "bc0e89a6-7f7d-4fe5-95d6-298c1354ad3e",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "e10df914-dff9-4ef8-b819-caa4088b88a5",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
    ],
    videos: [
      {
        guid: "c54f6b59-434d-4adb-9d94-1559d8407bbc",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "d35f5184-9e52-4d54-8897-1573f53d5e10",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "41cf176c-a378-42e4-b32e-e201c2ccfe21",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "2a470912-a724-40f6-a2fd-ffc2cfe916eb",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
      {
        guid: "01ddad0e-ceb7-4d34-8498-f3f30b5f2b23",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
    ],
  },
  {
    wedding: "92cfbd3b-6735-4628-bc20-211b60dbe25d",
    images: [
      {
        guid: "04417be5-5192-4bc0-8c38-77bf879fa971",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
      {
        guid: "00adc5b5-588d-4914-9d09-d59572684c78",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "41849e21-0887-473a-9a04-e6f1188a6452",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "a1bfa2dc-f539-45d9-863c-ff910c06f5f8",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "ddfa9964-2f44-40ea-aa3a-b5d953ca5a9a",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
    ],
    videos: [
      {
        guid: "864e853c-b47e-4650-becc-cf444dace712",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
      {
        guid: "31a4a12f-c7b7-4d3d-9d73-8843b6f60a38",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
      {
        guid: "d5e9eda9-62d8-4f93-a6a5-209d674043c6",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
      {
        guid: "cba59d35-2463-43df-a52b-2c30186408ef",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
      {
        guid: "3849c104-d16b-4df0-8693-44cb41bb3489",
        url: "https://picsum.photos/200",
        event: "mehndi",
      },
    ],
  },
  {
    wedding: "0393cb0b-32a1-4d50-b758-30bdd8f0581d",
    images: [
      {
        guid: "6b917a1a-e1ac-4c62-9ee9-4846076462db",
        url: "https://picsum.photos/200",
        event: "reception party",
      },
      {
        guid: "b212148e-4ad7-4e85-8faa-94f5bd969f23",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "ecf298b5-ef01-44c2-a1fd-ef1a031d04d6",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "be3daa3b-d40e-4bb7-b67f-3f6a2b38cae8",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "01ad202b-bfa0-4488-b1a3-62e17dcd967e",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
    ],
    videos: [
      {
        guid: "deca1b62-e530-4d63-8cc2-d73b63e91817",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "fb3dfe1c-f3ec-4c8d-9e2a-2365fa29482f",
        url: "https://picsum.photos/200",
        event: "haldi",
      },
      {
        guid: "35b3a1da-44e9-4027-aa56-85837c572673",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "6a127386-fbde-424d-a371-5389c8e9ba03",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
      {
        guid: "c5421ceb-473d-4415-a8eb-cc48481d1d0b",
        url: "https://picsum.photos/200",
        event: "shadi",
      },
    ],
  },
];
const weddingData = [
  {
    wedid: "2c64aee3-12a9-403d-8263-5f3ef6dd0da0",
    email: "allisonspears@zosis.com",
    phone: "+1 (830) 453-2288",
    registered: "2023-04-06T11:30:31 -06:-30",
    carousel: [
      {
        thumbnail: "http://placehold.it/32x32",
        video: "http://placehold.it/32x32",
        active: true,
      },
      {
        thumbnail: "http://placehold.it/32x32",
        video: "http://placehold.it/32x32",
        active: true,
      },
    ],
    event: [
      {
        name: "shadi",
        thumbnail: "http://placehold.it/32x32",
        address: {
          street: "888 Veterans Avenue",
          city: "Winesburg",
          state: "Oregon",
          country: "Minnesota",
          site: "mollit",
          pincode: 671071,
        },
        start_time: "",
        end_time: "",
      },
      {
        name: "haldi",
        thumbnail: "http://placehold.it/32x32",
        address: {
          street: "982 Olive Street",
          city: "Cutter",
          state: "Colorado",
          country: "Marshall Islands",
          site: "est",
          pincode: 675418,
        },
        start_time: "",
        end_time: "",
      },
      {
        name: "shadi",
        thumbnail: "http://placehold.it/32x32",
        address: {
          street: "576 Chester Street",
          city: "Talpa",
          state: "Montana",
          country: "Wisconsin",
          site: "sint",
          pincode: 191717,
        },
        start_time: "",
        end_time: "",
      },
    ],
    story: [
      {
        name: "consequat",
        thumbnail: "http://placehold.it/32x32",
        content:
          "Ex deserunt dolore sint do incididunt ullamco ad. Quis nostrud tempor minim magna proident commodo. Ipsum sunt deserunt dolor tempor consequat magna sunt consectetur Lorem elit aute. Adipisicing adipisicing sint duis cillum est velit nostrud sint aute elit. Nulla nisi tempor dolore consectetur occaecat nostrud deserunt adipisicing cillum.\r\n",
      },
      {
        name: "sint",
        thumbnail: "http://placehold.it/32x32",
        content:
          "Non magna veniam officia mollit aliqua deserunt occaecat elit. Duis ad enim id do duis enim et. Dolor in ea velit pariatur consectetur et quis ad est quis velit et adipisicing. Exercitation ad pariatur proident ipsum consequat irure ullamco nulla est proident incididunt voluptate. Dolor irure amet labore exercitation incididunt labore ipsum. Tempor nulla incididunt cillum sunt anim sit nostrud occaecat consequat.\r\n",
      },
      {
        name: "nisi",
        thumbnail: "http://placehold.it/32x32",
        content:
          "In nostrud fugiat veniam sit laboris nulla tempor officia incididunt. Exercitation pariatur anim et eu. Eu pariatur fugiat duis qui velit do cupidatat. Labore occaecat cupidatat magna veniam cupidatat duis pariatur culpa pariatur. Magna aute exercitation esse voluptate. Et sit anim non laborum dolore labore ullamco culpa eiusmod do aute.\r\n",
      },
    ],
    bride: {
      first_name: "Chris",
      last_name: "Leblanc",
      description:
        "Ex tempor aliquip exercitation eu laborum laborum. Lorem sit in tempor cupidatat et enim veniam est. Culpa aliqua fugiat ut do nisi consequat officia anim ea mollit consectetur ex id nostrud. Eiusmod fugiat dolore proident officia et dolore in. Sit excepteur nostrud dolore excepteur reprehenderit ad incididunt in ea aliquip amet fugiat. Est ex dolore non consectetur consectetur sunt cillum et exercitation. Nulla eiusmod laboris sunt occaecat exercitation dolor Lorem et et.\r\n",
      picture: "http://placehold.it/32x32",
      age: 32,
      gender: "female",
      socialMediahandles: {
        twitter: "http://placehold.it/32x32",
        facebook: "http://placehold.it/32x32",
        linkdin: "http://placehold.it/32x32",
        instagram: "http://placehold.it/32x32",
      },
    },
    groom: {
      first_name: "Frye",
      last_name: "Valencia",
      description:
        "Ad excepteur adipisicing eu labore aute cillum aute mollit id tempor adipisicing non nulla do. Sunt ad enim consectetur amet cupidatat. Ut reprehenderit voluptate laborum laborum laborum anim est dolore incididunt ex proident id reprehenderit id. Amet tempor non sunt pariatur esse esse amet deserunt voluptate. Dolor tempor duis consectetur fugiat consectetur culpa est ipsum esse ex.\r\n",
      picture: "http://placehold.it/32x32",
      age: 22,
      gender: "male",
      socialMediahandles: {
        twitter: "http://placehold.it/32x32",
        facebook: "http://placehold.it/32x32",
        linkdin: "http://placehold.it/32x32",
        instagram: "http://placehold.it/32x32",
      },
    },
    invite_msg:
      "Labore officia incididunt eu qui irure qui. Consequat ipsum do et aliquip consectetur. Sunt tempor reprehenderit anim veniam sint dolor incididunt fugiat ea nulla dolor non.\r\n",
  },
  {
    wedid: "3929b1e3-3df4-43fe-b515-f2f9df1372c3",
    email: "fryevalencia@zosis.com",
    phone: "+1 (953) 499-3011",
    registered: "2019-10-20T09:53:00 -06:-30",
    carousel: [
      {
        thumbnail: "http://placehold.it/32x32",
        video: "http://placehold.it/32x32",
        active: true,
      },
      {
        thumbnail: "http://placehold.it/32x32",
        video: "http://placehold.it/32x32",
        active: false,
      },
    ],
    event: [
      {
        name: "shadi",
        thumbnail: "http://placehold.it/32x32",
        address: {
          street: "482 Hendrix Street",
          city: "Topaz",
          state: "Iowa",
          country: "Rhode Island",
          site: "dolor",
          pincode: 798945,
        },
        start_time: "",
        end_time: "",
      },
      {
        name: "haldi",
        thumbnail: "http://placehold.it/32x32",
        address: {
          street: "242 Bradford Street",
          city: "Rutherford",
          state: "Guam",
          country: "North Carolina",
          site: "dolore",
          pincode: 549663,
        },
        start_time: "",
        end_time: "",
      },
      {
        name: "shadi",
        thumbnail: "http://placehold.it/32x32",
        address: {
          street: "722 Bayview Avenue",
          city: "Bath",
          state: "West Virginia",
          country: "Arizona",
          site: "proident",
          pincode: 835392,
        },
        start_time: "",
        end_time: "",
      },
    ],
    story: [
      {
        name: "eiusmod",
        thumbnail: "http://placehold.it/32x32",
        content:
          "Magna mollit deserunt incididunt ea officia incididunt non pariatur Lorem nulla duis laboris quis elit. Veniam duis dolore ipsum officia. Labore adipisicing officia ad eiusmod ut. In do nostrud nulla laborum non voluptate aliquip minim. Non consequat ullamco ullamco fugiat consequat proident officia consequat. Cillum enim amet pariatur dolore consequat mollit ipsum. Aute labore dolor magna Lorem ullamco sit ea officia officia fugiat in dolor.\r\n",
      },
      {
        name: "qui",
        thumbnail: "http://placehold.it/32x32",
        content:
          "Cillum excepteur laboris nulla irure enim culpa labore Lorem. Anim deserunt proident labore esse irure cillum nostrud. Fugiat laboris laborum velit adipisicing officia non duis cillum fugiat elit. Reprehenderit do nulla ea ut fugiat nisi.\r\n",
      },
      {
        name: "minim",
        thumbnail: "http://placehold.it/32x32",
        content:
          "Fugiat esse commodo proident culpa magna sunt aute cillum Lorem occaecat minim. Excepteur sint laboris aliquip aute aliqua. Veniam dolor ut mollit et velit pariatur. Ad ullamco sint est officia deserunt. Ad enim nisi est elit duis esse excepteur sunt cillum est et id eiusmod. Proident commodo ullamco sint eu consectetur incididunt ea officia mollit incididunt ut pariatur id aliquip.\r\n",
      },
    ],
    bride: {
      first_name: "Bernadette",
      last_name: "Orr",
      description:
        "Velit veniam voluptate occaecat eu exercitation sit laboris sit do fugiat. Eiusmod sint ea veniam reprehenderit amet ex enim Lorem laboris labore pariatur magna minim eiusmod. Ullamco commodo qui minim adipisicing. Aliqua exercitation non incididunt nostrud magna minim aliquip officia fugiat exercitation minim ipsum culpa in. Proident veniam incididunt qui nostrud. Mollit nisi deserunt aute exercitation laboris tempor aliquip sit est dolor ullamco ea esse proident. Esse amet officia magna do pariatur ut sunt cillum eu laboris minim.\r\n",
      picture: "http://placehold.it/32x32",
      age: 28,
      gender: "female",
      socialMediahandles: {
        twitter: "http://placehold.it/32x32",
        facebook: "http://placehold.it/32x32",
        linkdin: "http://placehold.it/32x32",
        instagram: "http://placehold.it/32x32",
      },
    },
    groom: {
      first_name: "Carolina",
      last_name: "Wong",
      description:
        "Nisi duis voluptate irure non excepteur dolor deserunt sint deserunt mollit. Non commodo elit ea incididunt sit aliquip cupidatat laboris pariatur aliquip enim. Eu commodo mollit occaecat adipisicing pariatur veniam Lorem esse ad tempor ad aliqua duis qui. Cillum duis nisi cillum nostrud laborum laboris irure cupidatat ipsum qui amet. Ut fugiat sunt sit eiusmod. Culpa in pariatur sint aliqua dolore dolor sint in pariatur proident est nulla.\r\n",
      picture: "http://placehold.it/32x32",
      age: 38,
      gender: "female",
      socialMediahandles: {
        twitter: "http://placehold.it/32x32",
        facebook: "http://placehold.it/32x32",
        linkdin: "http://placehold.it/32x32",
        instagram: "http://placehold.it/32x32",
      },
    },
    invite_msg:
      "Mollit nisi pariatur labore esse. Id officia id velit nulla pariatur nisi. Aute veniam magna est magna cupidatat eu irure. Id aute in labore cupidatat et aliquip Lorem est eiusmod minim. Ea et dolore mollit reprehenderit deserunt magna.\r\n",
  },
];
//console.log(media);
const weddingRouter = express.Router();
const getWeddingById = async (id) => {
  const result = await Wedding.findByPk({
    where: {
      wedID: id,
    },
    order: [["id", "ASC"]],
  });
  return JSON.parse(JSON.stringify(result, null));
};
const getAllWeddings = async () => {
  try {
    const result = await Wedding.findAll();
    return JSON.parse(JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
};
const getAttendesByWeddingId = async (id) => {
  const result = await Attende.findAll({ wedding: id });
  return JSON.parse(JSON.stringify(result));
};

const getMediaByWeddingId = async (id) => {
  const result = await Media.findAll({ wedding: id });
  return JSON.parse(JSON.stringify(result));
};

weddingRouter
  .get("/", async (req, res) => {
    const { id } = req.params;
    try {
      // const weddingData = await getWeddingById(id);
      // const mediaData = await getMediaByWeddingId(id);
      // const attendeData = await getAttendesByWeddingId(id);

      res.status(200).render("hero.hbs", {
        layout: "hero",
        wedding: weddingData[0],
        media: mediaData[0],
        attende: attendeData[0],
        method: "GET",
      });
    } catch (e) {
      res.status(404).send("");
    }
  })
  .post("/", async (req, res) => {
    try {
      if (req.body.firstName) {
        const result = await User.create(req.body);
        res.status(302).redirect("/buses");
      } else {
        res.status(400).send("Invalid User");
      }
    } catch (e) {
      console.error(e);
      res.status(500).send("Internal Server Error");
    }
  })
  .put("/", async (req, res) => {
    const seatObj = { ...req.body };
    console.log(seatObj);
    Object.values(seatObj).forEach(async (key) => {
      const id = key;
      try {
        await Seat.update(
          { status: "Booked" },
          {
            where: {
              id: id,
            },
          },
        );
        if (Object.values(seatObj)) {
          res.status(200).json({ message: "Seats Updated!" });
        } else {
          res.status(400).json({ message: "Seats not Updated!" });
        }
      } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
      }
    });
  });
module.exports = {
  weddingRouter,
  getWeddingById,
  getAttendesByWeddingId,
  getMediaByWeddingId,
};
