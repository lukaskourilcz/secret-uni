import { mount } from "@vue/test-utils";
import DomainHeader from "../src/components/DomainHeader.vue";

test("renders domain name and toggles verbose", async () => {
  const wrapper = mount(DomainHeader, {
    props: {
      domain: "neviditelna-univerzita.cz",
      verbose: false,
    },
  });

  expect(wrapper.text()).toContain("neviditelna-univerzita.cz");

  const checkbox = wrapper.find('input[type="checkbox"]');
  await checkbox.setChecked(true);

  expect(wrapper.emitted()["toggle-verbose"]).toBeTruthy();
  expect(wrapper.emitted()["toggle-verbose"][0]).toEqual([true]);
});
