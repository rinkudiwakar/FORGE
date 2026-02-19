export default function FAB() {
  return (
    <div className="fab-container">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSez5FNre4moJEgHFhAeXGRyJ1x24RQqUObyMH0sR6KsNecKpg/viewform?usp=publish-editor"
        target="_blank" className="fab fab-primary" style={{ animationDelay: '0s' }}>
        <i className="fas fa-user-plus"></i>
        <span className="fab-tooltip">Register Now</span>
      </a>
      <a href="https://chat.whatsapp.com/CIdLwB27FS60E7yd3lxepT?mode=gi_t" target="_blank" className="fab fab-whatsapp"
        style={{ animationDelay: '0.2s' }}>
        <i className="fab fa-whatsapp"></i>
        <span className="fab-tooltip">Join WhatsApp Group</span>
      </a>
      <a href="https://fog-airedale-655.notion.site/FORGE-1-0-Hackathon-Rulebook-Official-Rules-Guidelines-2a8916b052134106963ad3c8f2ca8497"
        target="_blank" className="fab fab-guide" style={{ animationDelay: '0.4s' }}>
        <i className="fas fa-gavel"></i>
        <span className="fab-tooltip">Rulebook</span>
      </a>
      <a href="https://fog-airedale-655.notion.site/FORGE-1-0-Buildathon-Participant-Guide-2f9372e4badc80b9a971eafbe96b6436"
        target="_blank" className="fab fab-participant" style={{ animationDelay: '0.6s' }}>
        <i className="fas fa-file-alt"></i>
        <span className="fab-tooltip">Participant Guide</span>
      </a>
    </div>
  );
}
