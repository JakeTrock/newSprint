java -jar ./Compiler/closure-compiler-v20200719.jar --js ./js/ns_dev.js --js_output_file ./js/ns_opt.js --compilation_level ADVANCED_OPTIMIZATIONS --rewrite_polyfills --jscomp_off undefinedVars
uglifycss ./css/ns.css > ./css/ns_prod.css
