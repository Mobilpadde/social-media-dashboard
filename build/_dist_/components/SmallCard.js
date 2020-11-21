import './SmallCard.css.proxy.js';
/* src/components/SmallCard.svelte generated by Svelte v3.29.7 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text as text_1
} from "../../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let div2;
	let div0;
	let span0;
	let t0;
	let t1;
	let img0;
	let img0_src_value;
	let img0_alt_value;
	let t2;
	let div1;
	let h2;
	let t3;
	let t4;
	let span1;
	let img1;
	let img1_src_value;
	let img1_alt_value;
	let t5;
	let t6;
	let t7;
	let span1_class_value;

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			span0 = element("span");
			t0 = text_1(/*text*/ ctx[2]);
			t1 = space();
			img0 = element("img");
			t2 = space();
			div1 = element("div");
			h2 = element("h2");
			t3 = text_1(/*total*/ ctx[3]);
			t4 = space();
			span1 = element("span");
			img1 = element("img");
			t5 = space();
			t6 = text_1(/*change*/ ctx[4]);
			t7 = text_1("\n      Today");
			attr(span0, "class", "svelte-5q9eo4");
			attr(img0, "class", "icon svelte-5q9eo4");
			if (img0.src !== (img0_src_value = "/images/icon-" + /*icon*/ ctx[1] + ".svg")) attr(img0, "src", img0_src_value);
			attr(img0, "alt", img0_alt_value = "" + (/*icon*/ ctx[1] + "-logo"));
			attr(div0, "class", "section svelte-5q9eo4");
			attr(h2, "class", "svelte-5q9eo4");
			attr(img1, "class", "change svelte-5q9eo4");
			if (img1.src !== (img1_src_value = "/images/icon-" + /*changeGoes*/ ctx[0] + ".svg")) attr(img1, "src", img1_src_value);
			attr(img1, "alt", img1_alt_value = "" + (/*changeGoes*/ ctx[0] + "-logo"));
			attr(span1, "class", span1_class_value = "change " + /*changeGoes*/ ctx[0] + " svelte-5q9eo4");
			attr(div1, "class", "section svelte-5q9eo4");
			attr(div2, "class", "card svelte-5q9eo4");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, span0);
			append(span0, t0);
			append(div0, t1);
			append(div0, img0);
			append(div2, t2);
			append(div2, div1);
			append(div1, h2);
			append(h2, t3);
			append(div1, t4);
			append(div1, span1);
			append(span1, img1);
			append(span1, t5);
			append(span1, t6);
			append(span1, t7);
		},
		p(ctx, [dirty]) {
			if (dirty & /*text*/ 4) set_data(t0, /*text*/ ctx[2]);

			if (dirty & /*icon*/ 2 && img0.src !== (img0_src_value = "/images/icon-" + /*icon*/ ctx[1] + ".svg")) {
				attr(img0, "src", img0_src_value);
			}

			if (dirty & /*icon*/ 2 && img0_alt_value !== (img0_alt_value = "" + (/*icon*/ ctx[1] + "-logo"))) {
				attr(img0, "alt", img0_alt_value);
			}

			if (dirty & /*total*/ 8) set_data(t3, /*total*/ ctx[3]);

			if (dirty & /*changeGoes*/ 1 && img1.src !== (img1_src_value = "/images/icon-" + /*changeGoes*/ ctx[0] + ".svg")) {
				attr(img1, "src", img1_src_value);
			}

			if (dirty & /*changeGoes*/ 1 && img1_alt_value !== (img1_alt_value = "" + (/*changeGoes*/ ctx[0] + "-logo"))) {
				attr(img1, "alt", img1_alt_value);
			}

			if (dirty & /*change*/ 16) set_data(t6, /*change*/ ctx[4]);

			if (dirty & /*changeGoes*/ 1 && span1_class_value !== (span1_class_value = "change " + /*changeGoes*/ ctx[0] + " svelte-5q9eo4")) {
				attr(span1, "class", span1_class_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { changeGoes = "" } = $$props;
	let { icon = "" } = $$props;
	let { text = "" } = $$props;
	let { total = 0 } = $$props;
	let { change = 0 } = $$props;

	$$self.$$set = $$props => {
		if ("changeGoes" in $$props) $$invalidate(0, changeGoes = $$props.changeGoes);
		if ("icon" in $$props) $$invalidate(1, icon = $$props.icon);
		if ("text" in $$props) $$invalidate(2, text = $$props.text);
		if ("total" in $$props) $$invalidate(3, total = $$props.total);
		if ("change" in $$props) $$invalidate(4, change = $$props.change);
	};

	return [changeGoes, icon, text, total, change];
}

class SmallCard extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			changeGoes: 0,
			icon: 1,
			text: 2,
			total: 3,
			change: 4
		});
	}
}

export default SmallCard;