import request from "supertest";

import app from "../src/app";

describe("GET /api", () => {
	it("should return 200 OK", () => {
		return request(app).get("/api/meter/2023-12-24T04:09:44.000Z").expect(200);
	});
});
