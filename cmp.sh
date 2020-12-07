java -jar ./Compiler/closure-compiler-v20200719.jar --js ns_dev.js --js_output_file ns_opt.js --compilation_level ADVANCED_OPTIMIZATIONS --rewrite_polyfills --jscomp_off undefinedVars
uglifycss ./css/dev/ns_edge.css > ./css/prod/ns_edge_prod.css
uglifycss ./css/dev/ns_IE.css > ./css/prod/ns_IE_prod.css
uglifycss ./css/dev/ns_Firefox.css > ./css/prod/ns_Firefox_prod.css
uglifycss ./css/dev/ns_Opera.css > ./css/prod/ns_Opera_prod.css
uglifycss ./css/dev/ns_UCBrow.css > ./css/prod/ns_UCBrow_prod.css
uglifycss ./css/dev/ns_SamsungBrow.css > ./css/prod/ns_SamsungBrow_prod.css
uglifycss ./css/dev/ns_Chrome.css > ./css/prod/ns_Chrome_prod.css
uglifycss ./css/dev/ns_Safari.css > ./css/prod/ns_Safari_prod.css
uglifycss ./css/dev/ns_fallback.css > ./css/prod/ns_fallback_prod.css
