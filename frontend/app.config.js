export default defineAppConfig({
  ui: {
    button: {
      icon: {
        size: {
          xl: "h-6 w-6 md:h-8 md:w-8",
        },
      },
    },

    card: {
      base: "",
      background: "",
      divide: "",
      ring: "",
      rounded: "",
      shadow: "",
      body: {
        base: "",
        background: "",
        padding: "px-4 py-5 sm:p-6 flex justify-center",
      },
      header: {
        base: "",
        background: "",
        padding: "px-1 py-5 sm:px-6",
      },
      footer: {
        base: "",
        background: "",
        padding: "px-4 py-4 sm:px-6",
      },
    },

    input: {
      icon: {
        base: "flex-shrink-0 text-slate-800 "
      }
    }
  },
});
