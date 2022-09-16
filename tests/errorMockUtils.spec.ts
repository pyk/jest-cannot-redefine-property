import * as BaseConfig from "../src/utils";

it("Raise TypeError Cannot Redefine Property", () => {
    const getBaseConfig = jest.spyOn(BaseConfig, "getBaseConfig");
    getBaseConfig.mockReturnValue({ chainId: 42161, supportedChains: [] });
});
