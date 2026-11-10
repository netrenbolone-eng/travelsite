import { CreditCard, Banknote, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n/types";

export function LeadSection({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <section className="section-pad lead-section" id="lead">
      <div className="container lead-layout">
        <div className="lead-intro"><span className="section-number">07</span><h2 className="display-heading">{dictionary.form.title}</h2><p>{dictionary.form.description}</p>
          <div className="payment-panel"><h3>{dictionary.form.paymentTitle}</h3><div className="payment-option"><CreditCard /><span>{locale === "ru" ? "Депозит онлайн по ссылке" : "Online deposit via secure link"}</span><Button asChild variant="outline" size="sm"><a href={site.depositUrl} target="_blank" rel="noreferrer">{dictionary.form.paymentLink}<ArrowUpRight className="size-3.5" /></a></Button></div><div className="payment-option"><Banknote /><span>{dictionary.form.transfer}</span></div><div className="payment-option"><Banknote /><span>{dictionary.form.cash}</span></div><p>{dictionary.form.paymentNote}</p></div>
        </div>
        <div className="lead-form-panel"><LeadForm locale={locale} dictionary={dictionary} /></div>
      </div>
    </section>
  );
}