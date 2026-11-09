
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "../styles/homepageStyle.css";

const HomePage = () => {

    return (
        <div className="container">
            <div className="d-flex header-section flex-column flex-md-row  mt-4 ">
                <div className="container pt-4   order-2 order-md-1">
                    <h1 className="display-2 header-title">
                        {" "}
                        សូមស្វាគមន៍មកកាន់ EarthDX (កំណែថ្មីឆ្នាំ ២០២៦)
                    </h1>
                    <p> យើងជាក្រុមការងារដែលពោរពេញដោយឆន្ទៈ និងការប្តេជ្ញាចិត្ត ក្នុងគោលបំណងលើកកម្ពស់គុណភាពជីវិតរបស់អ្នកគ្រប់គ្នា តាមរយៈការបង្កើតផលិតផលបច្ចេកវិទ្យាថ្មីៗប្រកបដោយភាពច្នៃប្រឌិត។ យើងបង្កើតផលិតផលដ៏ឆ្នើម ដើម្បីជួយដោះស្រាយបញ្ហាអាជីវកម្មរបស់អ្នក។</p>
                    <div className="d-flex pt-5">
                        <button className="btn btn-success px-4 py-2">
                            {" "}
                            <strong> ចូលរួមឥឡូវនេះ </strong>{" "}
                        </button>
                        <button className="ps-4 nav-link">
                            <span>
                                <strong className="pre-scrollable">
                                    ស្វែងយល់បន្ថែម {"  "}
                                </strong>
                            </span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>

                <div className="order-md-2">
                    <img
                        className="img-fluid "
                        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1940798.jpg"
                        alt="រូបភាពតំណាង"
                    />
                </div>
            </div>

            <div className="container text-center mt-5 pt-5 mb-5">
                <h1 className="feature-title">
                    {" "}
                    ជំហានដើម្បីចាប់ផ្តើម
                    <span className="feature-title text-success pre-scrollable">
                        ផែនការរបស់អ្នកឱ្យបានត្រឹមត្រូវ
                    </span>
                </h1>
                <div className="d-flex flex-column container flex-wrap flex-md-row justify-content-center gap-5 mt-5 ">
                    <div className="item-card px-4 pb-3  col-sm-12 col-md-4 col-lg-3">
                        <img
                            className="img-fluid p-4"
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-5293900-4432198.png"
                            alt="រូបភាពរុក្ខជាតិ"
                        />
                        <h2> ការការពារដំណាំ</h2>
                        <p> ការការពារ មានន័យថាការទប់ស្កាត់ហានិភ័យ ជំងឺ ឬការខូចខាតដែលអាចកើតមានឡើង។ ក្នុងវិស័យកសិកម្ម ការការពារដំណាំជួយកាត់បន្ថយការបាត់បង់ទិន្នផល និងរក្សាគុណភាពដំណាំឱ្យបានល្អ។</p>
                    </div>
                    <div className="item-card px-4 pb-3 col-sm-12 col-md-4 col-lg-3">
                        <img
                            className="img-fluid"
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-6347424-5242126.png"
                            alt="រូបភាពរុក្ខជាតិ"
                        />
                        <h2> ការគ្រប់គ្រងហានិភ័យ</h2>
                        <p> ការគ្រប់គ្រងហានិភ័យ គឺជាការរៀបចំផែនការ និងអនុវត្តវិធានការដើម្បីកាត់បន្ថយការខូចខាត។ វាជួយឱ្យកសិករអាចការពារដំណាំពីជំងឺ សត្វល្អិត និងបញ្ហាបរិស្ថានផ្សេងៗ។</p>
                    </div>
                    <div className="item-card px-4 pb-3 col-sm-12 col-md-4 col-lg-3">
                        <img
                            className="img-fluid "
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-pot-5663958-4719914.png"
                            alt="រូបភាពផើងរុក្ខជាតិ"
                        />
                        <h2> ការអភិវឌ្ឍប្រកបដោយចីរភាព</h2>
                        <p> ការអភិវឌ្ឍប្រកបដោយចីរភាព គឺជាការប្រើប្រាស់ធនធានធម្មជាតិឱ្យមានប្រសិទ្ធភាព ដើម្បីរក្សាបរិស្ថាន និងលើកកម្ពស់ផលិតភាពកសិកម្មសម្រាប់បច្ចុប្បន្ន និងអនាគត។</p>
                    </div>
                </div>
            </div>

            <div
                className="container section3 d-flex flex-column
      flex-md-row mt-5 pt-5 justify-content-center align-items-center"
            >
                <div className="image-side col-sm-12 col-md-6 col-lg-5 ">
                    <img
                        className="img-fluid"
                        src="https://i.pinimg.com/736x/dd/60/b0/dd60b0ed3169b8aa469da1ee784bc088.jpg"
                        alt="រូបភាពផ្កា"
                    />
                </div>

                <div className="text-side ">
                    <h1 className="feature-title">ផ្តល់សារធាតុចិញ្ចឹមល្អៗដល់សួនដំណាំរបស់អ្នក</h1>
                    <ul>
                        <li>ការលូតលាស់ និងសុខភាពដំណាំកាន់តែប្រសើរ៖ នៅពេលអ្នកផ្តល់សារធាតុចិញ្ចឹមគ្រប់គ្រាន់ដល់ដំណាំ ដំណាំនឹងលូតលាស់រឹងមាំ មានសុខភាពល្អ និងផ្តល់ទិន្នផលខ្ពស់។ វាក៏ជួយបង្កើនភាពធន់នឹងជំងឺ និងធ្វើឱ្យផលិតផលមានពណ៌ និងរសជាតិកាន់តែល្អ។</li>
                        <li>សារធាតុចិញ្ចឹមល្អអាចជួយកែលម្អរចនាសម្ព័ន្ធដី ធ្វើឱ្យដីអាចរក្សាទឹក និងបង្ហូរទឹកបានសមស្រប។ វាជួយឱ្យរុក្ខជាតិលូតលាស់បានល្អ និងកាត់បន្ថយបញ្ហាសំណឹកដី។</li>
                        <li>ការបង្កើនជីជាតិដី៖ ការផ្តល់សារធាតុចិញ្ចឹមសមស្របអាចជួយបង្កើនជីជាតិដី ដែលនាំឱ្យទទួលបានទិន្នផលកាន់តែច្រើន និងដំណាំមានសុខភាពល្អ។</li>
                    </ul>
                </div>
            </div>

            <div
                className="section4 mx-0 mx-lg-5 d-flex flex-column flex-md-row  justify-content-center
      align-items-center
      container"
            >
                <div className="text-side w-100 w-md-75  order-2 order-md-0">
                    <h1 className="feature-title">រួមគ្នាដាំដុះ និងអភិវឌ្ឍរុក្ខជាតិរបស់អ្នក</h1>
                    <p className="w-100 w-lg-50 pe-0 pe-md-5">
                        យើងជាក្រុមការងារដែលមានចំណង់ចំណូលចិត្ត និងការប្តេជ្ញាចិត្តខ្ពស់ ក្នុងគោលបំណងលើកកម្ពស់គុណភាពជីវិតរបស់មនុស្សគ្រប់រូប តាមរយៈការបង្កើតផលិតផល និងដំណោះស្រាយបច្ចេកវិទ្យាថ្មីៗ។ យើងផ្តល់នូវដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត ដើម្បីជួយដោះស្រាយបញ្ហាអាជីវកម្ម និងការអភិវឌ្ឍរបស់អ្នក។
                    </p>

                    <button className="btn btn-success px-5 py-2 mt-4">
                        ស្វែងយល់បន្ថែម <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="image-side">
                    <img
                        className="img-fluid rounded-3"
                        src="https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?w=740&t=st=1689090817~exp=1689091417~hmac=3d894a048f16d3d703d59d3caaf24623a9cc6652c05615fe159743eca8b1cfd6"
                        alt="រូបភាពរុក្ខជាតិក្នុងផើង"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
