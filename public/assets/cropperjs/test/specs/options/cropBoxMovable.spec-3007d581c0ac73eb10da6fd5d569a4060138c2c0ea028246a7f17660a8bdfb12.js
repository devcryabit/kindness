describe("cropBoxMovable (option)",()=>{it("should by movable by default",e=>{const o=window.createImage(),t=new Cropper(o,{ready(){const o=t.cropper.querySelector(".cropper-face");expect(o.dataset.cropperAction).to.equal("all"),e()}});expect(t.options.cropBoxMovable).to.be["true"]}),it("should not be movable",e=>{const o=window.createImage(),t=new Cropper(o,{cropBoxMovable:!1,ready(){const o=t.cropper.querySelector(".cropper-face");expect(o.dataset.cropperAction).to.not.equal("all"),e()}});expect(t.options.cropBoxMovable).to.be["false"]})});