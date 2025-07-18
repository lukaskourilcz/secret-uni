import { mount } from "@vue/test-utils";
import AdministrativeContacts from "../src/components/AdministrativeContacts.vue";

test("shows only handles when verbose=false", () => {
  const wrapper = mount(AdministrativeContacts, {
    props: {
      verbose: false,
      contacts: [
        {
          handle: "KNIHOVNIK",
          name: "Knihovník",
          organization: "Neviditelná univerzita",
          publish: { organization: true, name: true },
        },
        {
          handle: "MRAKOPLAS",
          name: "Mrakoplaš",
          organization: "Neviditelná univerzita",
          publish: { organization: false, name: false },
        },
      ],
    },
  });

  expect(wrapper.text()).toContain("Knihovník: KNIHOVNIK");
  expect(wrapper.text()).toContain("Mrakoplaš: MRAKOPLAS");
});
