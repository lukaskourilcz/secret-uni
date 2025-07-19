import { mount } from "@vue/test-utils";
import AuthInfo from "../src/components/AuthInfo.vue";

test("renders SHOW button and reveals secret when clicked", async () => {
  const wrapper = mount(AuthInfo, {
    props: {
      authInfo: "S3cretPwd!76",
      expiresAt: "2025-07-19T12:00:00Z",
    },
  });

  const button = wrapper.find("button.auth-btn");

  expect(button.text()).toBe("SHOW");
  expect(wrapper.text()).not.toContain("S3cretPwd!76");

  await button.trigger("click");

  expect(button.text()).toBe("HIDE");
  expect(wrapper.text()).toContain("S3cretPwd!76");
});
