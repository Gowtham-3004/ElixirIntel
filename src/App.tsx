import { useEffect, useMemo, useState, type ReactNode } from "react"

type IconName = "arrow" | "back" | "bell" | "briefcase" | "building" | "calendar" | "check" | "chevron" | "close" | "document" | "home" | "lock" | "logout" | "receipt" | "search" | "settings" | "shield" | "sparkles" | "user" | "utensils" | "vault"

type Tab = "home" | "explore" | "alerts" | "profile"

type Station = {
  name: string
  description: string
  status: "Available" | "Coming Soon"
  icon: IconName
  accent: string
}

const stations: Station[] = [
  {
    name: "FinanceOps",
    description: "Payments, vendors & finance",
    status: "Available",
    icon: "receipt",
    accent: "finance",
  },
  {
    name: "Claims",
    description: "Expenses and reimbursements",
    status: "Coming Soon",
    icon: "document",
    accent: "claims",
  },
  {
    name: "Vendors",
    description: "Partners and procurement",
    status: "Coming Soon",
    icon: "building",
    accent: "vendors",
  },
  {
    name: "Hunger",
    description: "Meals and office catering",
    status: "Coming Soon",
    icon: "utensils",
    accent: "hunger",
  },
  {
    name: "Tasks",
    description: "Your work, organized",
    status: "Coming Soon",
    icon: "check",
    accent: "tasks",
  },
  {
    name: "Vault",
    description: "Secure files and records",
    status: "Coming Soon",
    icon: "vault",
    accent: "vault",
  },
]

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    back: <path d="m15 18-6-6 6-6" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M8 9h2m4 0h2M8 13h2m4 0h2M8 17h2m4 0h2M2 21h20" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <path d="M18 6 6 18M6 6l12 12" />,
    document: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    logout: (
      <path d="M10 17l5-5-5-5m5 5H3m10 9h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6" />
    ),
    receipt: (
      <>
        <path d="M5 3v18l3-2 4 2 4-2 3 2V3l-3 2-4-2-4 2-3-2Z" />
        <path d="M9 9h6M9 13h6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    shield: (
      <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Zm-3-10 2 2 4-4" />
    ),
    sparkles: (
      <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Zm14-2 .8 2.2 2.2.8-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13Z" />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    utensils: (
      <path d="M7 3v8m-3-8v5a3 3 0 0 0 6 0V3m-3 8v10m8-18v18m0-18c3 2 4 5 4 9h-4" />
    ),
    vault: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 8v4l3 2M7 21v-2m10 2v-2" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function Button({
  children,
  className = "",
  onClick,
  label,
  type = "button",
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  label?: string
  type?: "button" | "submit"
}) {
  return (
    <button
      aria-label={label}
      className={`button ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

function Header({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string
  title: string
  action?: ReactNode
}) {
  return (
    <header className="page-header">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
      </div>
      {action}
    </header>
  )
}

function DynamicIsland() {
  return (
    <div aria-hidden="true" className="dynamic-island">
      <span className="island-sensor" />
      <span className="island-camera" />
    </div>
  )
}

function BottomNav({
  active,
  onChange,
}: {
  active: Tab
  onChange: (tab: Tab) => void
}) {
  const items: { id: Tab label: string icon: IconName }[] = [
    { id: "home", label: "Home", icon: "home" },
    { id: "explore", label: "Explore", icon: "sparkles" },
    { id: "alerts", label: "Alerts", icon: "bell" },
    { id: "profile", label: "Profile", icon: "user" },
  ]

  return (
    <nav aria-label="Primary navigation" className="bottom-nav">
      {items.map((item) => (
        <Button
          className={`nav-item ${active === item.id ? "active" : ""}`}
          key={item.id}
          onClick={() => onChange(item.id)}
        >
          <span className="nav-icon-wrap">
            <Icon name={item.icon} size={22} />
            {item.id === "alerts" && <span className="notification-dot" />}
          </span>
          <span>{item.label}</span>
        </Button>
      ))}
    </nav>
  )
}

function StationCard({
  station,
  onOpen,
}: {
  station: Station
  onOpen: () => void
}) {
  const available = station.status === "Available"
  return (
    <Button
      className={`station-card ${available ? "featured" : ""}`}
      label={`Open ${station.name}, ${station.status}`}
      onClick={onOpen}
    >
      <div className="station-topline">
        <span className={`station-icon ${station.accent}`}>
          <Icon name={station.icon} size={22} />
        </span>
        <span className={`status ${available ? "available" : "soon"}`}>
          {available && <span className="status-dot" />}
          {station.status}
        </span>
      </div>
      <div className="station-copy">
        <h3>{station.name}</h3>
        <p>{station.description}</p>
      </div>
      <span className="station-arrow">
        <Icon name="arrow" size={18} />
      </span>
    </Button>
  )
}

function HomeView({ onOpen }: { onOpen: (station: Station) => void }) {
  const [query, setQuery] = useState("")
  const filtered = useMemo(
    () =>
      stations.filter((station) =>
        `${station.name} ${station.description}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  )

  return (
    <main className="view home-view">
      <Header
        action={
          <div className="avatar" aria-label="Arjun Patel">
            AP
            <span className="online" />
          </div>
        }
        eyebrow="Monday, 12 August"
        title="Good morning, Arjun"
      />
      <p className="intro">What do you need today?</p>

      <label className="search-box">
        <Icon name="search" size={20} />
        <input
          aria-label="Search stations"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search stations"
          value={query}
        />
        {query && (
          <Button
            className="clear-search"
            label="Clear search"
            onClick={() => setQuery("")}
          >
            <Icon name="close" size={16} />
          </Button>
        )}
      </label>

      <section className="stations-section">
        <div className="section-heading">
          <div>
            <p className="section-label">Workspace</p>
            <h2>My Stations</h2>
          </div>
          <span className="station-count">{filtered.length} stations</span>
        </div>
        {filtered.length ? (
          <div className="station-grid">
            {filtered.map((station) => (
              <StationCard
                key={station.name}
                onOpen={() => onOpen(station)}
                station={station}
              />
            ))}
          </div>
        ) : (
          <div className="empty-search">
            <span className="empty-icon">
              <Icon name="search" size={24} />
            </span>
            <h3>No stations found</h3>
            <p>Try a different search term.</p>
          </div>
        )}
      </section>
    </main>
  )
}

function AlertsView() {
  return (
    <main className="view">
      <Header eyebrow="Stay up to date" title="Notifications" />
      <div className="filter-row">
        <span className="filter-pill active">All</span>
        <span className="filter-pill">Unread</span>
      </div>
      <section className="notification-list">
        <article className="notification-card unread">
          <span className="notification-icon finance">
            <Icon name="receipt" size={21} />
          </span>
          <div>
            <div className="notification-title">
              <h3>FinanceOps is ready</h3>
              <span>Now</span>
            </div>
            <p>Your FinanceOps workspace is available and ready to open.</p>
          </div>
        </article>
        <article className="notification-card">
          <span className="notification-icon neutral">
            <Icon name="shield" size={21} />
          </span>
          <div>
            <div className="notification-title">
              <h3>Security check complete</h3>
              <span>2d</span>
            </div>
            <p>Your sign-in and account security settings are up to date.</p>
          </div>
        </article>
      </section>
    </main>
  )
}

function ExploreView({ onOpen }: { onOpen: (station: Station) => void }) {
  return (
    <main className="view explore-view">
      <Header eyebrow="Workspace catalog" title="Explore Stations" />
      <p className="intro">
        Discover the tools being built for your working day.
      </p>
      <section className="explore-feature">
        <div>
          <span className="explore-kicker">
            <Icon name="sparkles" size={14} /> Featured Station
          </span>
          <h2>Move finance forward</h2>
          <p>
            Review payments, invoices and vendors from one secure workspace.
          </p>
          <Button className="explore-open" onClick={() => onOpen(stations[0])}>
            Open FinanceOps <Icon name="arrow" size={17} />
          </Button>
        </div>
        <span className="explore-orb">
          <Icon name="receipt" size={34} />
        </span>
      </section>
      <div className="section-heading explore-heading">
        <div>
          <p className="section-label">On the roadmap</p>
          <h2>Coming next</h2>
        </div>
      </div>
      <section className="explore-list">
        {stations.slice(1).map((station) => (
          <Button
            className="explore-row"
            key={station.name}
            onClick={() => onOpen(station)}
          >
            <span className={`station-icon ${station.accent}`}>
              <Icon name={station.icon} size={21} />
            </span>
            <span>
              <strong>{station.name}</strong>
              <small>{station.description}</small>
            </span>
            <span className="status soon">Soon</span>
          </Button>
        ))}
      </section>
    </main>
  )
}

function ProfileView({ onSignOut }: { onSignOut: () => void }) {
  return (
    <main className="view">
      <Header eyebrow="Your account" title="Profile" />
      <section className="profile-card">
        <div className="profile-avatar">AP</div>
        <div>
          <h2>Arjun Patel</h2>
          <p>Finance Operations</p>
          <span className="verified">
            <Icon name="shield" size={14} /> Verified employee
          </span>
        </div>
      </section>
      <section className="profile-menu">
        <Button className="menu-row">
          <span className="menu-icon">
            <Icon name="user" size={20} />
          </span>
          <span>
            <strong>Personal details</strong>
            <small>Name, email and contact</small>
          </span>
          <Icon name="chevron" size={18} />
        </Button>
        <Button className="menu-row">
          <span className="menu-icon">
            <Icon name="lock" size={20} />
          </span>
          <span>
            <strong>Security</strong>
            <small>Password and sign-in</small>
          </span>
          <Icon name="chevron" size={18} />
        </Button>
        <Button className="menu-row">
          <span className="menu-icon">
            <Icon name="settings" size={20} />
          </span>
          <span>
            <strong>Preferences</strong>
            <small>Theme and notifications</small>
          </span>
          <Icon name="chevron" size={18} />
        </Button>
      </section>
      <Button className="sign-out" onClick={onSignOut}>
        <Icon name="logout" size={19} /> Sign out
      </Button>
      <p className="version">Elixir Workspace · Version 1.0.0</p>
    </main>
  )
}

function AuthBrand() {
  return (
    <div className="auth-brand">
      <span className="brand-mark">
        <span />
        <span />
        <span />
      </span>
      <strong>Elixir</strong>
    </div>
  )
}

function LoginView({
  onLogin,
  onForgot,
}: {
  onLogin: (email: string) => void
  onForgot: () => void
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("arjun.patel@elixir.com")

  return (
    <main className="auth-view">
      <div className="auth-hero">
        <AuthBrand />
        <div className="auth-illustration">
          <span className="auth-orbit orbit-large" />
          <span className="auth-orbit orbit-small" />
          <span className="auth-tile tile-one">
            <Icon name="receipt" size={21} />
          </span>
          <span className="auth-tile tile-two">
            <Icon name="shield" size={19} />
          </span>
          <span className="auth-tile tile-three">
            <Icon name="briefcase" size={20} />
          </span>
          <span className="auth-core">
            <Icon name="sparkles" size={31} />
          </span>
        </div>
        <div className="auth-hero-copy">
          <h1>Your work, all in one place.</h1>
          <p>One secure workspace for every tool you need.</p>
        </div>
      </div>
      <form
        className="auth-panel"
        onSubmit={(event) => {
          event.preventDefault()
          onLogin(email)
        }}
      >
        <div className="auth-heading">
          <span>Welcome back</span>
          <h2>Sign in to Workspace</h2>
        </div>
        <label className="field">
          <span>Work email</span>
          <div className="field-control">
            <Icon name="user" size={19} />
            <input
              autoComplete="email"
              inputMode="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@company.com"
              required
              type="email"
              value={email}
            />
          </div>
        </label>
        <label className="field">
          <span>Password</span>
          <div className="field-control">
            <Icon name="lock" size={19} />
            <input
              autoComplete="current-password"
              defaultValue="workspace"
              placeholder="Enter your password"
              required
              type={showPassword ? "text" : "password"}
            />
            <Button
              className="password-toggle"
              label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((visible) => !visible)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </div>
        </label>
        <Button className="forgot-link" onClick={onForgot}>
          Forgot password?
        </Button>
        <Button className="auth-submit" type="submit">
          Sign in <Icon name="arrow" size={19} />
        </Button>
        <div className="demo-accounts">
          <span>Preview as</span>
          <Button onClick={() => setEmail("arjun.patel@elixir.com")}>
            Employee
          </Button>
          <Button onClick={() => setEmail("admin@elixir.com")}>Admin</Button>
        </div>
        <p className="auth-help">
          Protected by your organization’s secure sign-in.
        </p>
      </form>
    </main>
  )
}

function ResetPasswordView({ onBack }: { onBack: () => void }) {
  const [sent, setSent] = useState(false)

  return (
    <main className="reset-view">
      <div className="reset-topbar">
        <Button
          className="icon-button"
          label="Back to sign in"
          onClick={onBack}
        >
          <Icon name="back" size={22} />
        </Button>
        <AuthBrand />
        <span className="bar-spacer" />
      </div>
      <section className="reset-content">
        <span className={`reset-icon ${sent ? "sent" : ""}`}>
          <Icon name={sent ? "check" : "lock"} size={29} />
        </span>
        <p className="eyebrow">
          {sent ? "Check your inbox" : "Account recovery"}
        </p>
        <h1>{sent ? "Reset link sent" : "Reset your password"}</h1>
        <p className="reset-description">
          {sent
            ? "We sent password reset instructions to arjun.patel@elixir.com."
            : "Enter your work email and we’ll send secure instructions to create a new password."}
        </p>
        {!sent ? (
          <form
            className="reset-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSent(true)
            }}
          >
            <label className="field">
              <span>Work email</span>
              <div className="field-control">
                <Icon name="user" size={19} />
                <input
                  autoComplete="email"
                  defaultValue="arjun.patel@elixir.com"
                  inputMode="email"
                  required
                  type="email"
                />
              </div>
            </label>
            <Button className="auth-submit" type="submit">
              Send reset link
            </Button>
          </form>
        ) : (
          <Button className="auth-submit" onClick={onBack}>
            Back to sign in
          </Button>
        )}
      </section>
    </main>
  )
}

function DesktopSidebar({
  active,
  onChange,
  onSignOut,
}: {
  active: Tab
  onChange: (tab: Tab) => void
  onSignOut: () => void
}) {
  const items: { id: Tab label: string icon: IconName }[] = [
    { id: "home", label: "Home", icon: "home" },
    { id: "explore", label: "Explore", icon: "sparkles" },
    { id: "alerts", label: "Notifications", icon: "bell" },
    { id: "profile", label: "Profile", icon: "user" },
  ]

  return (
    <aside className="desktop-sidebar">
      <AuthBrand />
      <div className="sidebar-account">
        <span className="sidebar-avatar">AP</span>
        <span>
          <strong>Arjun Patel</strong>
          <small>Employee workspace</small>
        </span>
      </div>
      <nav aria-label="Employee workspace">
        {items.map((item) => (
          <Button
            className={active === item.id ? "active" : ""}
            key={item.id}
            onClick={() => onChange(item.id)}
          >
            <Icon name={item.icon} size={19} />
            {item.label}
          </Button>
        ))}
      </nav>
      <Button className="sidebar-signout" onClick={onSignOut}>
        <Icon name="logout" size={18} /> Sign out
      </Button>
    </aside>
  )
}

type AdminTab = "overview" | "stations" | "people" | "access" | "audit" | "settings"

const adminNavigation: {
  id: AdminTab
  label: string
  icon: IconName
}[] = [
  { id: "overview", label: "Overview", icon: "home" },
  { id: "stations", label: "Stations", icon: "briefcase" },
  { id: "people", label: "People", icon: "user" },
  { id: "access", label: "Access", icon: "shield" },
  { id: "audit", label: "Audit log", icon: "document" },
  { id: "settings", label: "Settings", icon: "settings" },
]

function AdminOverview() {
  return (
    <>
      <section className="admin-metrics">
        <article>
          <span className="metric-icon blue">
            <Icon name="briefcase" />
          </span>
          <p>Active Stations</p>
          <strong>1</strong>
          <small>5 in roadmap</small>
        </article>
        <article>
          <span className="metric-icon green">
            <Icon name="user" />
          </span>
          <p>Active employees</p>
          <strong>248</strong>
          <small>12 joined this month</small>
        </article>
        <article>
          <span className="metric-icon purple">
            <Icon name="shield" />
          </span>
          <p>Access grants</p>
          <strong>236</strong>
          <small>95% coverage</small>
        </article>
        <article>
          <span className="metric-icon amber">
            <Icon name="bell" />
          </span>
          <p>Open requests</p>
          <strong>7</strong>
          <small>3 require review</small>
        </article>
      </section>
      <div className="admin-grid">
        <section className="admin-panel station-health">
          <div className="admin-panel-heading">
            <div>
              <span>Workspace</span>
              <h2>Station health</h2>
            </div>
            <Button>View all</Button>
          </div>
          <div className="health-row">
            <span className="station-icon finance">
              <Icon name="receipt" />
            </span>
            <span>
              <strong>FinanceOps</strong>
              <small>WebView · Production</small>
            </span>
            <span className="status available">
              <span className="status-dot" />
              Healthy
            </span>
          </div>
          {stations.slice(1, 4).map((station) => (
            <div className="health-row" key={station.name}>
              <span className={`station-icon ${station.accent}`}>
                <Icon name={station.icon} />
              </span>
              <span>
                <strong>{station.name}</strong>
                <small>Placeholder</small>
              </span>
              <span className="status soon">Coming Soon</span>
            </div>
          ))}
        </section>
        <section className="admin-panel admin-activity">
          <div className="admin-panel-heading">
            <div>
              <span>Live feed</span>
              <h2>Recent activity</h2>
            </div>
          </div>
          {[
            ["AP", "Arjun opened FinanceOps", "2 min ago"],
            ["SK", "Sarah joined Workspace", "18 min ago"],
            ["DM", "Access granted to David", "1 hr ago"],
            ["JL", "Station settings updated", "3 hrs ago"],
          ].map(([initials, activity, time]) => (
            <div className="activity-row" key={activity}>
              <span>{initials}</span>
              <p>
                <strong>{activity}</strong>
                <small>{time}</small>
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

function AdminSection({ tab }: { tab: Exclude<AdminTab, "overview"> }) {
  const content = {
    stations: {
      title: "Station management",
      description:
        "Configure availability, platform behavior and tenant access.",
      rows: stations.map((station) => [
        station.name,
        station.status,
        station.name === "FinanceOps" ? "WebView" : "Placeholder",
      ]),
    },
    people: {
      title: "People directory",
      description: "Manage employee accounts and Workspace membership.",
      rows: [
        ["Arjun Patel", "Employee", "Active"],
        ["Sarah Khan", "Finance Admin", "Active"],
        ["David Miller", "Employee", "Active"],
        ["Maya Chen", "Employee", "Invited"],
      ],
    },
    access: {
      title: "Access control",
      description: "Review Station entitlements and pending access requests.",
      rows: [
        ["Finance Operations", "FinanceOps", "128 members"],
        ["Workspace Admins", "All Stations", "6 members"],
        ["New Employees", "Workspace only", "14 members"],
      ],
    },
    audit: {
      title: "Audit log",
      description:
        "Track security and administrative changes across Workspace.",
      rows: [
        ["Station settings updated", "Sarah Khan", "Today, 10:42"],
        ["Access granted", "Admin", "Today, 09:18"],
        ["Employee invited", "Admin", "Yesterday"],
      ],
    },
    settings: {
      title: "Workspace settings",
      description: "Manage organization identity, security and notifications.",
      rows: [
        ["Organization profile", "Elixir Workspace", "Configured"],
        ["Authentication", "Secure password", "Active"],
        ["Notifications", "Email and in-app", "Enabled"],
      ],
    },
  }[tab]

  return (
    <section className="admin-panel admin-table-panel">
      <div className="admin-section-intro">
        <div>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <Button className="admin-primary">Add new</Button>
      </div>
      <div className="admin-table">
        {content.rows.map((row) => (
          <div className="admin-table-row" key={row[0]}>
            <span>
              <strong>{row[0]}</strong>
              <small>{row[1]}</small>
            </span>
            <span>{row[2]}</span>
            <Button label={`Options for ${row[0]}`}>•••</Button>
          </div>
        ))}
      </div>
    </section>
  )
}

function AdminApp({ onSignOut }: { onSignOut: () => void }) {
  const [active, setActive] = useState<AdminTab>("overview")
  const current = adminNavigation.find((item) => item.id === active)!

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <AuthBrand />
        <span className="admin-badge">Admin console</span>
        <nav aria-label="Admin navigation">
          {adminNavigation.map((item) => (
            <Button
              className={active === item.id ? "active" : ""}
              key={item.id}
              onClick={() => setActive(item.id)}
            >
              <Icon name={item.icon} size={19} /> {item.label}
            </Button>
          ))}
        </nav>
        <Button className="sidebar-signout" onClick={onSignOut}>
          <Icon name="logout" size={18} /> Sign out
        </Button>
      </aside>
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p>Administration</p>
            <h1>{current.label}</h1>
          </div>
          <div className="admin-user">
            <span className="sidebar-avatar">SA</span>
            <span>
              <strong>Sarah Admin</strong>
              <small>Platform administrator</small>
            </span>
          </div>
        </header>
        <div className="admin-content">
          {active === "overview" ? (
            <AdminOverview />
          ) : (
            <AdminSection tab={active} />
          )}
        </div>
      </main>
    </div>
  )
}

function PlaceholderView({
  station,
  onClose,
}: {
  station: Station
  onClose: () => void
}) {
  return (
    <main className="overlay-view">
      <div className="native-bar">
        <Button className="icon-button" label="Back to home" onClick={onClose}>
          <Icon name="back" size={22} />
        </Button>
        <strong>{station.name}</strong>
        <span className="bar-spacer" />
      </div>
      <section className="placeholder-content">
        <div className={`placeholder-illustration ${station.accent}`}>
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <Icon name={station.icon} size={38} />
        </div>
        <span className="status soon">Coming Soon</span>
        <h1>{station.name} is on the way</h1>
        <p>
          {station.name} will be available in a future Workspace release. We’ll
          let you know when it’s ready.
        </p>
        <Button className="primary-button" onClick={onClose}>
          Back to Home
        </Button>
      </section>
    </main>
  )
}

function FinanceView({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="overlay-view finance-view">
      <div className="native-bar">
        <Button className="back-button" onClick={onClose}>
          <Icon name="back" size={20} /> Back
        </Button>
        <strong>FinanceOps</strong>
        <Button
          className="icon-button"
          label="Close FinanceOps"
          onClick={onClose}
        >
          <Icon name="close" size={20} />
        </Button>
      </div>
      {loading ? (
        <section className="station-loader">
          <span className="loader-mark">
            <Icon name="receipt" size={26} />
          </span>
          <h2>Opening FinanceOps…</h2>
          <p>Setting up your secure session</p>
          <span className="progress-track">
            <span />
          </span>
        </section>
      ) : (
        <section className="embedded-station">
          <div className="finance-hero">
            <span className="secure-label">
              <Icon name="lock" size={14} /> Secure workspace
            </span>
            <h1>FinanceOps</h1>
            <p>Welcome back, Arjun. Your finance workspace is ready.</p>
          </div>
          <div className="finance-content">
            <div className="finance-summary">
              <div>
                <span>Pending approvals</span>
                <strong>8</strong>
              </div>
              <div>
                <span>Due this week</span>
                <strong>3</strong>
              </div>
            </div>
            <h2>Quick access</h2>
            <div className="quick-list">
              <div>
                <span className="quick-icon">
                  <Icon name="document" />
                </span>
                <span>
                  <strong>Invoices</strong>
                  <small>Review and approve</small>
                </span>
                <Icon name="chevron" size={18} />
              </div>
              <div>
                <span className="quick-icon">
                  <Icon name="building" />
                </span>
                <span>
                  <strong>Vendors</strong>
                  <small>Manage vendor records</small>
                </span>
                <Icon name="chevron" size={18} />
              </div>
              <div>
                <span className="quick-icon">
                  <Icon name="calendar" />
                </span>
                <span>
                  <strong>Payments</strong>
                  <small>View upcoming payments</small>
                </span>
                <Icon name="chevron" size={18} />
              </div>
            </div>
            <p className="embedded-note">
              FinanceOps is securely embedded in Elixir Workspace.
            </p>
          </div>
        </section>
      )}
    </main>
  )
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [accountRole, setAccountRole] = useState<"employee" | "admin">(
    "employee",
  )
  const [authScreen, setAuthScreen] = useState<"login" | "reset">("login")
  const [activeTab, setActiveTab] = useState<Tab>("home")
  const [openStation, setOpenStation] = useState<Station | null>(null)

  if (!authenticated) {
    return (
      <div className="app-shell auth-shell">
        <DynamicIsland />
        {authScreen === "login" ? (
          <LoginView
            onForgot={() => setAuthScreen("reset")}
            onLogin={(email) => {
              setAccountRole(
                email.toLowerCase().includes("admin") ? "admin" : "employee",
              )
              setAuthenticated(true)
            }}
          />
        ) : (
          <ResetPasswordView onBack={() => setAuthScreen("login")} />
        )}
      </div>
    )
  }

  if (accountRole === "admin") {
    return (
      <AdminApp
        onSignOut={() => {
          setAuthenticated(false)
          setAuthScreen("login")
        }}
      />
    )
  }

  if (openStation?.status === "Available") {
    return (
      <div className="app-shell employee-shell">
        <DynamicIsland />
        <FinanceView onClose={() => setOpenStation(null)} />
      </div>
    )
  }

  if (openStation) {
    return (
      <div className="app-shell employee-shell">
        <DynamicIsland />
        <PlaceholderView
          onClose={() => setOpenStation(null)}
          station={openStation}
        />
      </div>
    )
  }

  return (
    <div className="app-shell employee-shell">
      <DynamicIsland />
      <DesktopSidebar
        active={activeTab}
        onChange={setActiveTab}
        onSignOut={() => setAuthenticated(false)}
      />
      <div className="brand-wash" />
      {activeTab === "home" && <HomeView onOpen={setOpenStation} />}
      {activeTab === "explore" && <ExploreView onOpen={setOpenStation} />}
      {activeTab === "alerts" && <AlertsView />}
      {activeTab === "profile" && (
        <ProfileView
          onSignOut={() => {
            setActiveTab("home")
            setAuthenticated(false)
          }}
        />
      )}
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
