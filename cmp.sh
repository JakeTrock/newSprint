npx google-closure-compiler --js ./js/ns_dev.js --js_output_file ./js/ns_opt.js
npx google-closure-compiler --js ./js/btn_cust.js --js_output_file ./js/cust_opt.js --compilation_level WHITESPACE_ONLY
npx google-closure-compiler --js ./js/btn_dropin.js --js_output_file ./js/dropin_opt.js --compilation_level WHITESPACE_ONLY

npx uglifycss ./css/ns.css > ./css/ns_prod.css
