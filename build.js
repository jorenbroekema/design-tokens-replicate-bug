const StyleDictionary = require("style-dictionary");
const { registerTransforms, transforms } = require("@tokens-studio/sd-transforms");

registerTransforms(StyleDictionary);

const path = require("path");

// Any tokens that come from Figma will be prefixed with the source file name.
// This is to avoid naming collisions between tokens from different sources.
// The older tokens will not be namespaced, to keep them backwards compatible... but
// these should be phased out over time.
StyleDictionary.registerTransform({
  name: "prefixBySourceFile",
  type: "name",
  transformer: function (prop) {
    const sourceFilePath = prop.filePath;

    const name = prop.name
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("/", "");

    if (sourceFilePath.includes("figmaTokens")) {
      const sourceFileName = path
        .basename(sourceFilePath, path.extname(sourceFilePath))
        .split(".")[0];

      return `token-${sourceFileName}-${name}`;
    }

    return `token-${name}`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'custom/tokens-studio',
  transforms: [...transforms, 'attribute/cti', 'name/cti/kebab', 'prefixBySourceFile'],
});

const sd = StyleDictionary.extend('./config.json')

sd.buildAllPlatforms();
