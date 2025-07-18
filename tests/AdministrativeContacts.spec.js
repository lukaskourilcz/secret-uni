import { mount } from "@vue/test-utils";
import AdministrativeContacts from "../src/components/AdministrativeContacts.vue";

const contacts = [
  {
    handle: "KNIHOVNIK",
    organization: "Neviditelná univerzita",
    name: "Knihovník",
    publish: { organization: true, name: true },
  },
  {
    handle: "MRAKOPLAS",
    organization: "Neviditelná univerzita",
    name: "Mrakoplaš",
    publish: { organization: false, name: false },
  },
];

describe("AdministrativeContacts.vue", () => {
  it("shows only handles when verbose=false", () => {
    const wrapper = mount(AdministrativeContacts, {
      props: { contacts, verbose: false },
    });

    expect(wrapper.text()).toContain("Handle: KNIHOVNIK");
    expect(wrapper.text()).toContain("Handle: MRAKOPLAS");
    expect(wrapper.text()).not.toContain("Organization");
    expect(wrapper.text()).not.toContain("Name");
  });

  it("shows full details when verbose=true", () => {
    const wrapper = mount(AdministrativeContacts, {
      props: { contacts, verbose: true },
    });

    expect(wrapper.text()).toContain("Organization: Neviditelná univerzita");
    expect(wrapper.text()).toContain("Name: Knihovník");
  });
});
