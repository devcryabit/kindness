describe("autoCrop (option)",()=>{it("should crop automatically by default",e=>{const o=window.createImage(),t=new Cropper(o,{ready(){expect(t.cropped).to.be["true"],expect(window.getComputedStyle(t.cropBox).display).to.not.equal("none"),e()}});expect(t.options.autoCrop).to.be["true"]}),it("should not crop automatically",e=>{const o=window.createImage(),t=new Cropper(o,{autoCrop:!1,ready(){expect(t.cropped).to.be["false"],expect(window.getComputedStyle(t.cropBox).display).to.equal("none"),e()}});expect(t.options.autoCrop).to.be["false"]})});