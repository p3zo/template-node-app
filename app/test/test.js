import "core-js/stable";
import "regenerator-runtime/runtime";

import app from "../src/app";
import chai from "chai";
import chaiHttp from "chai-http";

chai.should();
chai.use(chaiHttp);

describe("/GET hello", () => {
     it("should return hello", done => {
          chai.request(app)
               .get("/hello")
               .end((err, response) => {
                    response.should.have.status(200);
                    response.text.should.be.eq("hello");

                    done();
               });
     });
});
