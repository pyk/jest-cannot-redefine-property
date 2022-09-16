import * as add from "../src/add";

describe("Reproduce cannot redefine property error", () => {
    it("Should be compiled with error", () => {
        const mockedAdd = jest.spyOn(add, "add");
        mockedAdd.mockReturnValue(4);
        expect(add.add(2, 5)).toBe(4);
    });
});
